import { useState } from 'react'
import { Container } from './styles'
import { getRelativeTimeString } from '@utils/getRelativeTimeString'
import { CardHeader } from '../CardHeader'
import { CardBookReview } from '../CardBookReview'

interface IRating {
  id: string
  rate: number
  created_at: string
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
}

interface CardReviewProps {
  rating: IRating
}

export function CardReview({ rating }: CardReviewProps) {
  const [isShowMore, setIsShowMore] = useState(false)

  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  return (
    <Container isShowMore={isShowMore}>
      <CardHeader rating={rating} distance={distance} />
      <CardBookReview
        rating={rating}
        isShowMore={isShowMore}
        setIsShowMore={setIsShowMore}
      />
    </Container>
  )
}
