import { useQuery } from '@tanstack/react-query'
import { Card } from './components/Card'
import { Container } from './styles'
import { api } from '../../../../lib/axios'
import { Modal } from '../../../../components/Modal'
import { useEffect, useState } from 'react'
import { Router, useRouter } from 'next/router'

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

interface BookDetail {
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

interface ListBooksProps {
  category: string | null
  search: string
}

export function ListBooks({ category, search }: ListBooksProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [bookId, setBookId] = useState('')

  const router = useRouter()

  const { data: books } = useQuery<Book[]>([`book-${category}`], async () => {
    const { data } = await api.get('/books', {
      params: {
        category,
      },
    })

    return data?.books ?? []
  })

  const { data: book } = useQuery<BookDetail>([`book-${bookId}`], async () => {
    if (bookId === '') return null

    const { data } = await api.get(`/books/details/${bookId}`)

    return data?.book ?? null
  })

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  function handleSelectBook(bookId: string) {
    setBookId(bookId)
    setModalOpen(true)
  }

  function handleCloseModal() {
    setModalOpen(!modalOpen)
  }

  useEffect(() => {
    if (!router.query?.bookId) return

    const { pathname, query } = router

    setBookId(String(router.query?.bookId))
    setModalOpen(true)

    delete router.query.bookId

    router.push({
      pathname,
      query,
    })
  }, [router, router.query.bookId])

  return (
    <>
      <Container>
        {filteredBooks?.map((book) => (
          <Card book={book} handleSelectBook={handleSelectBook} key={book.id} />
        ))}
      </Container>

      {modalOpen && book && (
        <Modal bookDetail={book} handleClose={handleCloseModal} />
      )}
    </>
  )
}
