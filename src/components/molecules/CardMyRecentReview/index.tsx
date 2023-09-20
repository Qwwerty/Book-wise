import { Ratings } from '@components/Ratings'
import { Image } from '@components/atoms/Image'
import {
  About,
  Card,
  Comment,
  Container,
  DeleteComment,
  Header,
  ReviewDate,
  Title,
} from './styles'
import { X } from 'phosphor-react'
import { IRating } from '@components/organims/MyListRecentReviews'
import { getRelativeTimeString } from '@utils/getRelativeTimeString'
import { api } from '@lib/axios'
import { queryClient } from '@lib/react-query'

interface ICardMyRecentReview {
  rating: IRating
  isOwnProfile: boolean
}

export function CardMyRecentReview({
  isOwnProfile,
  rating,
}: ICardMyRecentReview) {
  async function handleRemoveRating(ratingId: string) {
    await api.delete(`/delete-rating/${ratingId}`)
    await queryClient.invalidateQueries(['profile', rating.user_id])
  }

  return (
    <Container>
      <ReviewDate>
        {getRelativeTimeString(new Date(rating.created_at), 'pt-BR')}
      </ReviewDate>

      <Card>
        <Header>
          <Image
            src={rating.book.cover_url}
            width={98}
            height={134}
            alt={rating.book.name}
          />

          <About>
            <Title>
              <p>{rating.book.name}</p>
              <span>{rating.book.author}</span>
            </Title>

            <Ratings quantity={rating.rate} />
          </About>
        </Header>

        <Comment>{rating.description}</Comment>

        {isOwnProfile && (
          <DeleteComment onClick={() => handleRemoveRating(rating.id)}>
            <X />
          </DeleteComment>
        )}
      </Card>
    </Container>
  )
}
