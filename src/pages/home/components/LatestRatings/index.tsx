import { useSession } from 'next-auth/react'
import { ChartLineUp } from 'phosphor-react'
import { Container } from './styles'
import { PageTitle } from '../../../../components/PageTitle'
import { LastRead } from './components/LastRead'
import { ListRecentReviews } from './components/ListRecentReviews'

export function LatestRatings() {
  const session = useSession()

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
