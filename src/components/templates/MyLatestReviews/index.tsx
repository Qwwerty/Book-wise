import { PageTitle } from '@components/PageTitle'
import { Container } from './styles'
import { ChartLineUp } from 'phosphor-react'
import { ListRecentReviews } from 'src/pages/home/components/LatestRatings/components/ListRecentReviews'
import { MyLastRead } from '@components/organims/MyLastRead'

export function MyLatestReviews() {
  return (
    <Container>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: '2.75rem' }}
      />

      <MyLastRead />
      <ListRecentReviews />
    </Container>
  )
}
