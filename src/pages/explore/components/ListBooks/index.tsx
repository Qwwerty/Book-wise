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
  search: string
}

export function ListBooks({ category, search }: ListBooksProps) {
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

  return (
    <Container>
      {filteredBooks?.map((book) => (
        <Card book={book} key={book.id} />
      ))}
    </Container>
  )
}
