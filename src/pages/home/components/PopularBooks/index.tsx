import Link from 'next/link'
import { Container, Navigation } from './styles'
import { CaretRight } from 'phosphor-react'

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
    </Container>
  )
}
