import Link from 'next/link'
import { Container, ListPopularBooks, Navigation } from './styles'
import { CaretRight } from 'phosphor-react'
import { PopularBook } from './components/PopularBook'

export function PopularBooks() {
  return (
    <Container>
      <Navigation>
        <span>Livros populares</span>
        <Link href="#">
          <span>Ver todos</span>
          <CaretRight size={16} />
        </Link>
      </Navigation>

      <ListPopularBooks>
        <PopularBook />
      </ListPopularBooks>
    </Container>
  )
}
