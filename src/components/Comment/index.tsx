import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, X } from 'phosphor-react'
import { RatingsAvailable } from '../RatingsAvailable'
import { Controller, useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import {
  CommentActions,
  Container,
  Content,
  FormError,
  Header,
  IdentificationUser,
  SpinnerButton,
  TextAreaContainer,
  TextAreaFooter,
  TextAreaLimit,
} from './styles'
import { api } from '../../lib/axios'
import axios from 'axios'
import { queryClient } from '../../lib/react-query'
import { Avatar } from '@components/atoms/Avatar'

interface ReviewCommentProps {
  bookId: string
  user: {
    name: string
    avatar_url: string
  }
}

const reviewCommentFormSchema = z.object({
  rate: z.number().min(1).max(5),
  description: z
    .string()
    .min(10, 'O mínimo é de 10 caracteres.')
    .max(450, 'O máximo é de 450 caracteres.'),
})

type FormData = z.infer<typeof reviewCommentFormSchema>

export function ReviewComment({ bookId, user }: ReviewCommentProps) {
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
      description: '',
    },
  })

  const comment = watch('description') ?? ''

  async function handleReviewComment(data: FormData) {
    const { rate, description } = data

    try {
      await api.post(`ratings/${bookId}/rate`, {
        rate,
        description,
      })

      reset({
        rate: 0,
        description: '',
      })

      queryClient.invalidateQueries()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error('Você já avaliou este livro.', { theme: 'colored' })
      }
      console.error(error)
    }
  }

  return (
    <Container onSubmit={handleSubmit(handleReviewComment)}>
      <Header>
        <IdentificationUser>
          <Avatar src={user.avatar_url} alt={user.name} />
          <span>{user.name}</span>
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
            {...register('description')}
          />

          <TextAreaFooter>
            <FormError>{errors.description?.message}</FormError>
            <TextAreaLimit>
              {comment.length}/{450}
            </TextAreaLimit>
          </TextAreaFooter>
        </TextAreaContainer>

        <CommentActions>
          {isSubmitting ? (
            <SpinnerButton>
              <div />
            </SpinnerButton>
          ) : (
            <>
              <button
                onClick={() => reset({ rate: 0, description: '' })}
                type="button"
              >
                <X />
              </button>
              <button type="submit" disabled={isSubmitting}>
                <Check />
              </button>
            </>
          )}
        </CommentActions>
      </Content>

      <ToastContainer />
    </Container>
  )
}
