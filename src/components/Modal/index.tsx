import Image from 'next/image'
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
} from './styles'

import { Ratings } from '../Ratings'
import { getRelativeTimeString } from '../../utils/getRelativeTimeString'
import { RatingsAvailable } from '../RatingsAvailable'
import { useState } from 'react'

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

export function Modal({ bookDetail, handleClose }: ModalProps) {
  const [textAvailable, setTextAvailable] = useState('')

  const quantityAvailables = bookDetail.ratings.length + 1

  const categories = bookDetail.categories.reduce((acc, current) => {
    acc += `${current.category.name}, `

    return acc
  }, '')

  const categoriesWithoudLastComma = categories.slice(0, categories.length - 2)

  const handleTextareaChange = (event: any) => {
    if (textAvailable.length > TEXT_AREA_LENGTH) return

    setTextAvailable(String(event.target.value).slice(0, TEXT_AREA_LENGTH))
  }

  return (
    <Container>
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

                <RatingsAvailable />
              </NewCommentHeader>

              <NewCommentText>
                <TextAreaContainer>
                  <textarea
                    value={textAvailable}
                    onChange={handleTextareaChange}
                    placeholder="Escreva sua avaliação"
                  />
                  <span>
                    {textAvailable.length}/{TEXT_AREA_LENGTH}
                  </span>
                </TextAreaContainer>
                <NewCommentActions>
                  <button>
                    <X />
                  </button>
                  <button>
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
