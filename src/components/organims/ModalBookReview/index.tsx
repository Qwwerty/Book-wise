import * as Dialog from '@radix-ui/react-dialog'
import { ButtonClose, Content, Overlay } from './styles'

import { useQuery } from '@tanstack/react-query'
import { api } from '@lib/axios'
import { ModalBookReviewDetail } from '@components/molecules/ModalBookReviewDetail'
import { X } from 'phosphor-react'
import { ModalBookReviews } from '../ModalBookReviews'
import { Fragment } from 'react'

interface IBook {
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

export function ModalBookReview({ bookId, open, onOpenChange }: ModalProps) {
  const { data: book } = useQuery<IBook>(
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

  return (
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
            <Fragment>
              <ModalBookReviewDetail book={book} />
              <ModalBookReviews book={book} />
            </Fragment>
          )}
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
