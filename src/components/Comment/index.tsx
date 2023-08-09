import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { Check, X } from 'phosphor-react'
import { RatingsAvailable } from '../RatingsAvailable'
import { Controller, useForm } from 'react-hook-form'
import {
  CommentActions,
  Container,
  Content,
  FormError,
  Header,
  IdentificationUser,
  TextAreaContainer,
  TextAreaFooter,
  TextAreaLimit,
} from './styles'
import { UserInfoImage } from '../Modal/styles'

const reviewCommentFormSchema = z.object({
  rate: z.number().min(1).max(5),
  comment: z
    .string()
    .min(10, 'O mínimo é de 10 caracteres.')
    .max(450, 'O máximo é de 450 caracteres.'),
})

type FormData = z.infer<typeof reviewCommentFormSchema>

export function ReviewComment() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    resolver: zodResolver(reviewCommentFormSchema),
    defaultValues: {
      rate: 0,
      comment: '',
    },
  })

  const comment = watch('comment') ?? ''

  function handleReviewComment(data: FormData) {
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(handleReviewComment)}>
      <Header>
        <IdentificationUser>
          <UserInfoImage>
            <Image
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
              width={40}
              height={40}
              alt=""
            />
          </UserInfoImage>
          <span>Cristofer Rosser</span>
        </IdentificationUser>

        <Controller
          name="rate"
          control={control}
          render={({ field }) => {
            return (
              <RatingsAvailable
                numberOfStars={field.value}
                setSelectedStars={(starIndex: number) =>
                  field.onChange(starIndex)
                }
              />
            )
          }}
        />
      </Header>

      <Content>
        <TextAreaContainer>
          <textarea
            placeholder="Escreva sua avaliação"
            {...register('comment')}
          />

          <TextAreaFooter>
            <FormError>{errors.comment?.message}</FormError>
            <TextAreaLimit>
              {comment.length}/{450}
            </TextAreaLimit>
          </TextAreaFooter>
        </TextAreaContainer>

        <CommentActions>
          <button onClick={() => reset({ rate: 0, comment: '' })} type="button">
            <X />
          </button>
          <button type="submit" disabled={isSubmitting}>
            <Check />
          </button>
        </CommentActions>
      </Content>
    </Container>
  )
}
