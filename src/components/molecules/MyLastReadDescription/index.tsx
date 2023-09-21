import Link from 'next/link'
import { Container } from './styles'
import { CaretRight } from 'phosphor-react'
import { useSession } from 'next-auth/react'

export function MyLastReadDescription() {
  const session = useSession()

  const userId = session.data?.user.id as string

  return (
    <Container>
      <span>Sua última leitura</span>
      <Link href={`/profile/${userId}`}>
        Ver todas <CaretRight size={16} />
      </Link>
    </Container>
  )
}
