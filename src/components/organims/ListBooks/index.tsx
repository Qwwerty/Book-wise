import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { api } from '@lib/axios'
import { CardBook } from '@components/organims/CardBook'
import { Container } from './styles'
import { ModalBookReview } from '../ModalBookReview'

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
  ratings: number
  avgRating: number
  alreadyRead: boolean
}

interface ListBooksProps {
  category: string | null
  search: string
}

export function ListBooks({ category, search }: ListBooksProps) {
  const router = useRouter()

  const [modalOpen, setModalOpen] = useState(false)
  const [bookId, setBookId] = useState(() => {
    const { params } = router.query

    if (params) {
      setModalOpen(true)
      return params[0]
    }

    return ''
  })

  const { data: books } = useQuery<Book[]>([`book-${category}`], async () => {
    const { data } = await api.get('/books', {
      params: {
        category,
      },
    })

    return data?.books ?? []
  })

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  async function handleSelectBook(bookId: string) {
    await router.push(`/explore/${bookId}`)

    setBookId(bookId)
    setModalOpen(true)
  }

  async function handleToggleModal(value: boolean) {
    const isModalClose = value === false

    if (isModalClose) {
      await router.push('/explore')
    }

    setModalOpen(value)
  }

  return (
    <Fragment>
      <Container>
        {filteredBooks?.map((book) => (
          <CardBook
            book={book}
            handleSelectBook={handleSelectBook}
            key={book.id}
          />
        ))}
      </Container>

      {modalOpen && bookId && (
        <ModalBookReview
          open={modalOpen}
          onOpenChange={handleToggleModal}
          bookId={bookId}
        />
      )}
    </Fragment>
  )
}
