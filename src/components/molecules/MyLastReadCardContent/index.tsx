import { Author, Container, Resume, TitleBook } from './styles'
import { getRelativeTimeString } from '@utils/getRelativeTimeString'
import { MyLastReadCardStatus } from '../MyLastReadCardStatus'

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

interface IMyLastReadCardContent {
  rating: IRating
}

export function MyLastReadCardContent({ rating }: IMyLastReadCardContent) {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  return (
    <Container>
      <MyLastReadCardStatus distance={distance} rate={rating.rate} />

      <TitleBook>{rating.book.name}</TitleBook>
      <Author>{rating.book.author}</Author>

      <Resume>{rating.book.summary}</Resume>
    </Container>
  )
}
