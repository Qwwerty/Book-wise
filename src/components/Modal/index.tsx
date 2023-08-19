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
import { useQuery } from '@tanstack/react-query'
import { api } from '../../lib/axios'

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  avgRating: number
  total_pages: number
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
  bookId: string
  open: boolean
  onOpenChange: (value: boolean) => void
}

export function Modal({ bookId, open, onOpenChange }: ModalProps) {
  const [openSignIn, setOpenSignIn] = useState(false)

  const { data: session } = useSession()

  const { data: book } = useQuery<Book>(
    [`book-${bookId}`],
    async () => {
      if (bookId === '') return null

      const { data } = await api.get(`/books/details/${bookId}`)

      return data?.book ?? {}
    },
    {
      enabled: open,
    },
  )

  const amountOfComments = book?.ratings?.length ?? 0

  const canRate = book?.ratings.every(
    (rate) => rate.user_id !== session?.user.id,
  )

  const categories =
    book?.categories?.map((x) => x?.category?.name)?.join(', ') ?? ''

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

            {!book ? (
              <p>Carregando...</p>
            ) : (
              <>
                <BookDetail>
                  <Book>
                    <BookCover>
                      <Image
                        src={book.cover_url}
                        width={171}
                        height={242}
                        alt={book.name}
                      />
                    </BookCover>

                    <BookInfo>
                      <div>
                        <BookTitle>{book.name}</BookTitle>
                        <BookAuthor>{book.author}</BookAuthor>
                      </div>

                      <div>
                        <Ratings quantity={book.avgRating} />
                        <BookQuantityRate>
                          {amountOfComments}
                          {amountOfComments === 1 ? 'avaliação' : 'avaliações'}
                        </BookQuantityRate>
                      </div>
                    </BookInfo>
                  </Book>

                  <About>
                    <Category>
                      <BookmarkSimple size={24} />

                      <CategoryText>
                        <p>Categoria</p>
                        <span>{categories}</span>
                      </CategoryText>
                    </Category>

                    <Page>
                      <BookOpen size={24} />

                      <PageText>
                        <p>Páginas</p>
                        <span>{book.total_pages}</span>
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

                  {session && canRate && (
                    <ReviewComment bookId={book.id} user={session.user} />
                  )}

                  <CommentsList>
                    {book.ratings.map((rating) => (
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
              </>
            )}
          </Content>
        </Dialog.Portal>
      </Dialog.Root>

      <SignInModal
        bookId={book?.id ?? ''}
        open={openSignIn}
        onOpenChange={setOpenSignIn}
        callbackUrl="explore"
      />
    </>
  )
}
