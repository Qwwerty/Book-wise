import { MyLastReadCardContent } from '@components/molecules/MyLastReadCardContent'
import { Container } from './styles'
import { Image } from '@components/atoms/Image'

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

interface IMyLastReadCard {
  rating: IRating
}

export function MyLastReadCard({ rating }: IMyLastReadCard) {
  return (
    <Container>
      <Image src={rating.book.cover_url} width={108} height={152} alt="" />
      <MyLastReadCardContent rating={rating} />
    </Container>
  )
}
