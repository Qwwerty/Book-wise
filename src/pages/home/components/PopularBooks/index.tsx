import Link from 'next/link'
import { Container, ListPopularBooks, Navigation } from './styles'
import { CaretRight } from 'phosphor-react'
import { PopularBook } from './components/PopularBook'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../../../lib/axios'

interface Books {
  id: string
  name: string
  author: string
  cover_url: string
  rate: number
}

export function PopularBooks() {
  const { data: books } = useQuery<Books[]>(['popular-books'], async () => {
    const { data } = await api.get('/books/popular')

    return data?.books ?? []
  })

  return (
    <Container>
      <Navigation>
        <span>Livros populares</span>
        <Link href="/explore">
          <span>Ver todos</span>
          <CaretRight size={16} />
        </Link>
      </Navigation>

      <ListPopularBooks>
        {books?.map((book) => (
          <PopularBook book={book} key={book.id} />
        ))}
      </ListPopularBooks>
    </Container>
  )
}
