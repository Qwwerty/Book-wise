import { CardReview } from './components/CardReview'
import { Container, Title } from './styles'

export function ListRecentReviews() {
  return (
    <Container>
      <Title>Avaliações mais recentes</Title>

      <CardReview />
      <CardReview />
    </Container>
  )
}
