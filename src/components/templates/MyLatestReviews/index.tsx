import { ChartLineUp } from 'phosphor-react'
import { PageTitle } from '@components/PageTitle'
import { MyLastRead } from '@components/organims/MyLastRead'
import { Container } from './styles'
import { ListRecentReviews } from '@components/organims/ListRecentReviews'

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
