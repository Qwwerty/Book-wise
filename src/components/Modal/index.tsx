import Image from 'next/image'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { BookOpen, BookmarkSimple, Check, X } from 'phosphor-react'
import {
  About,
  Book,
  BookAuthor,
  BookCover,
  BookDetail,
  BookInfo,
  BookQuantityRate,
  BookTitle,
  ButtonClose,
  Category,
  CategoryText,
  Comments,
  CommentsTitle,
  Comment,
  Container,
  Content,
  Page,
  PageText,
  UserInfo,
  HeaderComment,
  CommentText,
  UserInfoImage,
  UserInfoDescription,
  CommentsList,
  NewComment,
  NewCommentHeader,
  NewCommentUser,
  NewCommentText,
  TextAreaContainer,
  NewCommentActions,
  FormError,
  TextAreaFooter,
  TextLimit,
} from './styles'

import { Ratings } from '../Ratings'
import { getRelativeTimeString } from '../../utils/getRelativeTimeString'
import { RatingsAvailable } from '../RatingsAvailable'
import { Controller, useForm } from 'react-hook-form'
import { error } from 'console'

interface BookDetail {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  avgRating: number
  created_at: string
  categories: Array<{
    book_id: string
    categoryId: string
    category: {
      id: string
      name: string
    }
  }>
  ratings: Array<{
    id: string
    rate: number
    description: string
    created_at: string
    book_id: string
    user_id: string
    user: {
      id: string
      email: string
      name: string
      avatar_url: string
      created_at: string
    }
  }>
}

interface ModalProps {
  bookDetail: BookDetail
  handleClose: () => void
}

const TEXT_AREA_LENGTH = 450

const newCommentFormSchema = z.object({
  rate: z.number().min(1).max(5),
  comment: z
    .string()
    .min(10, 'O mínimo é de 10 caracteres.')
    .max(450, 'O máximo é de 450 caracteres.'),
})

type FormData = z.infer<typeof newCommentFormSchema>

export function Modal({ bookDetail, handleClose }: ModalProps) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    resolver: zodResolver(newCommentFormSchema),
    defaultValues: {
      rate: 0,
      comment: '',
    },
  })

  const textAvailable = watch('comment') ?? ''
  const quantityAvailables = bookDetail.ratings.length + 1

  const categories = bookDetail.categories.reduce((acc, current) => {
    acc += `${current.category.name}, `

    return acc
  }, '')

  const categoriesWithoudLastComma = categories.slice(0, categories.length - 2)

  function handleNewComment(data: FormData) {
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(handleNewComment)}>
      <Content>
        <ButtonClose onClick={handleClose} type="button">
          <X size={24} />
        </ButtonClose>

        <BookDetail>
          <Book>
            <BookCover>
              <Image
                src={bookDetail.cover_url}
                width={171}
                height={242}
                alt={bookDetail.name}
              />
            </BookCover>

            <BookInfo>
              <div>
                <BookTitle>{bookDetail.name}</BookTitle>
                <BookAuthor>{bookDetail.author}</BookAuthor>
              </div>

              <div>
                <Ratings quantity={bookDetail.avgRating} />
                <BookQuantityRate>
                  {quantityAvailables} avaliações
                </BookQuantityRate>
              </div>
            </BookInfo>
          </Book>

          <About>
            <Category>
              <BookmarkSimple size={24} />

              <CategoryText>
                <p>Categoria</p>
                <span>{categoriesWithoudLastComma}</span>
              </CategoryText>
            </Category>

            <Page>
              <BookOpen size={24} />

              <PageText>
                <p>Páginas</p>
                <span>{bookDetail.total_pages}</span>
              </PageText>
            </Page>
          </About>
        </BookDetail>

        <Comments>
          <CommentsTitle>
            <span>Avaliações</span>
            <button type="button">Avaliar</button>
          </CommentsTitle>

          <CommentsList>
            <NewComment>
              <NewCommentHeader>
                <NewCommentUser>
                  <UserInfoImage>
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
                      width={40}
                      height={40}
                      alt=""
                    />
                  </UserInfoImage>
                  <span>Cristofer Rosser</span>
                </NewCommentUser>

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
              </NewCommentHeader>

              <NewCommentText>
                <TextAreaContainer>
                  <textarea
                    placeholder="Escreva sua avaliação"
                    {...register('comment')}
                  />
                  <TextAreaFooter>
                    <FormError>{errors.comment?.message}</FormError>
                    <TextLimit>
                      {textAvailable.length}/{TEXT_AREA_LENGTH}
                    </TextLimit>
                  </TextAreaFooter>
                </TextAreaContainer>

                <NewCommentActions>
                  <button>
                    <X />
                  </button>
                  <button type="submit" disabled={isSubmitting}>
                    <Check />
                  </button>
                </NewCommentActions>
              </NewCommentText>
            </NewComment>

            {bookDetail.ratings.map((rating) => (
              <Comment key={rating.id}>
                <HeaderComment>
                  <UserInfo>
                    <UserInfoImage>
                      <Image
                        src={rating.user.avatar_url}
                        width={40}
                        height={40}
                        alt={rating.user.name}
                      />
                    </UserInfoImage>
                    <UserInfoDescription>
                      <p>{rating.user.name}</p>
                      <span>
                        {getRelativeTimeString(
                          new Date(rating.created_at),
                          'pt-BR',
                        )}
                      </span>
                    </UserInfoDescription>
                  </UserInfo>

                  <Ratings quantity={rating.rate} />
                </HeaderComment>

                <CommentText>{rating.description}</CommentText>
              </Comment>
            ))}
          </CommentsList>
        </Comments>
      </Content>
    </Container>
  )
}
