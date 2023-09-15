import { useQuery } from '@tanstack/react-query'
import { Container } from './styles'
import { api } from '@lib/axios'
import { PopularBook } from '@components/molecules/PopularBook'

interface IBooks {
  id: string
  name: string
  author: string
  cover_url: string
  rate: number
  avgRating: number
}

export function ListPopularBooks() {
  const { data: books } = useQuery<IBooks[]>(['popular-books'], async () => {
    const { data } = await api.get('/books/popular')

    return data?.books ?? []
  })

  return (
    <Container>
      {books?.map((book) => (
        <PopularBook book={book} key={book.id} />
      ))}
    </Container>
  )
}
