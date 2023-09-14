import { useQuery } from '@tanstack/react-query'
import { Container } from './styles'
import { useSession } from 'next-auth/react'
import { api } from '@lib/axios'
import { MyLastReadDescription } from '@components/molecules/MyLastReadDescription'
import { MyLastReadCard } from '../MyLastReadCard'

interface IRating {
  id: string
  rate: number
  description: string
  created_at: string
  book: {
    name: string
    author: string
    summary: string
    cover_url: string
  }
}

export function MyLastRead() {
  const { data: session } = useSession()

  const userId = session?.user?.id

  const { data: latestUserRating } = useQuery<IRating>(
    ['latest-user-rating', userId],
    async () => {
      const { data } = await api.get('/ratings/user-latest')
      return data?.rating ?? null
    },
    {
      enabled: !!userId,
    },
  )

  if (!latestUserRating) return null

  return (
    <Container>
      <MyLastReadDescription />
      <MyLastReadCard rating={latestUserRating} />
    </Container>
  )
}
