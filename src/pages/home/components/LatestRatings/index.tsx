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
  book_id: string
  user_id: string
  user: {
    id: string
    name: string
  }
}

export function LatestRatings() {
  const session = useSession()
  const { data: rating } = useQuery<Rating>(['rating'], async () => {
    const { data } = await api.get('/ratings/user-latest')

    return data?.rating ?? []
  })

  const isSignedIn = session.status === 'authenticated'

  return (
    <Container>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: '2.75rem' }}
      />

      {isSignedIn && <LastRead />}
      <ListRecentReviews />
    </Container>
  )
}
