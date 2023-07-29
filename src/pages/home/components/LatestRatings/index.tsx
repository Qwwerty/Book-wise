import { useSession } from 'next-auth/react'
import { ChartLineUp } from 'phosphor-react'
import { Container } from './styles'
import { PageTitle } from '../../../../components/PageTitle'
import { LastRead } from './components/LastRead'
import { ListRecentReviews } from './components/ListRecentReviews'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../../../lib/axios'

interface Rating {
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

export function LatestRatings() {
  const { data: session } = useSession()

  const userId = session?.user?.id

  const { data: latestUserRating } = useQuery<Rating>(
    ['latest-user-rating', userId],
    async () => {
      const { data } = await api.get('/ratings/user-latest')
      return data?.rating ?? null
    },
    {
      enabled: !!userId,
    },
  )

  return (
    <Container>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: '2.75rem' }}
      />

      {latestUserRating && <LastRead rating={latestUserRating} />}
      <ListRecentReviews />
    </Container>
  )
}
