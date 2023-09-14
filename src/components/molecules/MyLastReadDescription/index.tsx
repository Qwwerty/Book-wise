import Link from 'next/link'
import { Container } from './styles'
import { CaretRight } from 'phosphor-react'

export function MyLastReadDescription() {
  return (
    <Container>
      <span>Sua última leitura</span>
      <Link href="/profile">
        Ver todas <CaretRight size={16} />
      </Link>
    </Container>
  )
}
