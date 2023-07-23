import { CardReview } from './components/CardReview'
import { Container, Title } from './styles'
import { api } from '../../../../../../lib/axios'
import { useQuery } from '@tanstack/react-query'

interface Rating {
  id: string
  rate: number
  user: {
    id: string
    name: string
    avatar_url: string
  }
  book: {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
  }
  created_at: string
}

export function ListRecentReviews() {
  const { data: ratings } = useQuery<Rating[]>(['ratings/latest'], async () => {
    const { data } = await api.get('/ratings/latest')

    return data?.ratings ?? []
  })

  return (
    <Container>
      <Title>Avaliações mais recentes</Title>

      {ratings?.map((rating) => (
        <CardReview rating={rating} key={rating.id} />
      ))}
    </Container>
  )
}
