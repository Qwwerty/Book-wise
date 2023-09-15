import Link from 'next/link'
import { Container, Navigation } from './styles'
import { CaretRight } from 'phosphor-react'
import { ListPopularBooks } from '../ListPopularBooks'

export function PopularBooks() {
  return (
    <Container>
      <Navigation>
        <span>Livros populares</span>
        <Link href="/explore">
          <span>Ver todos</span>
          <CaretRight size={16} />
        </Link>
      </Navigation>

      <ListPopularBooks />
    </Container>
  )
}
