import { useQuery } from '@tanstack/react-query'
import { Card } from './components/Card'
import { Container } from './styles'
import { api } from '../../../../lib/axios'

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
}

export function ListBooks({ category }: ListBooksProps) {
  const { data: books } = useQuery<Book[]>([`book-${category}`], async () => {
    const { data } = await api.get('/books', {
      params: {
        category,
      },
    })

    return data?.books ?? []
  })

  return (
    <Container>
      {books?.map((book) => (
        <Card book={book} key={book.id} />
      ))}
    </Container>
  )
}
