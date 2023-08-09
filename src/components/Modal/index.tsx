import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { BookOpen, BookmarkSimple, X } from 'phosphor-react'
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
  Overlay,
} from './styles'

import { Ratings } from '../Ratings'
import { getRelativeTimeString } from '../../utils/getRelativeTimeString'
import { ReviewComment } from '../Comment'
import { useSession } from 'next-auth/react'
import { SignInModal } from '../SignInModal'
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
  open: boolean
  onOpenChange: (value: boolean) => void
}

export function Modal({ bookDetail, open, onOpenChange }: ModalProps) {
  const [openSignIn, setOpenSignIn] = useState(false)

  const { data: session } = useSession()

  const amountOfComments = bookDetail.ratings.length + 1

  const categories = bookDetail.categories.reduce((acc, current) => {
    acc += `${current.category.name}, `

    return acc
  }, '')

  const categoriesWithoudLastComma = categories.slice(0, categories.length - 2)

  return (
    <>
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Trigger asChild />
        <Dialog.Portal>
          <Overlay />
          <Content>
            <Dialog.Close asChild>
              <ButtonClose>
                <X size={24} />
              </ButtonClose>
            </Dialog.Close>

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
                      {amountOfComments} avaliações
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

                {!session && (
                  <button onClick={() => setOpenSignIn(true)} type="button">
                    Avaliar
                  </button>
                )}
              </CommentsTitle>

              {session && <ReviewComment />}

              <CommentsList>
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
        </Dialog.Portal>
      </Dialog.Root>

      <SignInModal
        bookId={bookDetail.id}
        open={openSignIn}
        onOpenChange={setOpenSignIn}
        callbackUrl="explore"
      />
    </>
  )
}
