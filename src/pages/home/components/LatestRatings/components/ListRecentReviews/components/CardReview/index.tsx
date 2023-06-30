import { useState } from 'react'
import Image from 'next/image'
import {
  Author,
  Book,
  Container,
  Description,
  Header,
  HeaderInfo,
  Text,
  Title,
} from './styles'
import { Ratings } from '../../../../../../../../components/Ratings'

const MAX_LENGTH = 229

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
}

interface CardReviewProps {
  rating: Rating
}

export function CardReview({ rating }: CardReviewProps) {
  const [isShowMore, setIsShowMore] = useState(false)

  const hasOverflowText = rating.book.summary.length > MAX_LENGTH

  return (
    <Container isShowMore={isShowMore}>
      <Header>
        <HeaderInfo>
          <div>
            <Image
              src={rating.user.avatar_url}
              width={40}
              height={40}
              alt={rating.user.name}
            />
          </div>

          <div>
            <p>{rating.user.name}</p>
            <span>Hoje</span>
          </div>
        </HeaderInfo>
        <Ratings quantity={rating.rate} />
      </Header>

      <Book>
        <Image
          src={rating.book.cover_url}
          width={108}
          height={152}
          alt={rating.book.name}
        />

        <Description>
          <Title>{rating.book.name}</Title>
          <Author>{rating.book.author}</Author>

          {!hasOverflowText ? (
            <Text>
              {String(rating.book.summary).slice(0, MAX_LENGTH).concat('...')}
            </Text>
          ) : (
            <>
              {!isShowMore ? (
                <Text>
                  {String(rating.book.summary)
                    .slice(0, MAX_LENGTH)
                    .concat('...')}

                  <button onClick={() => setIsShowMore(!isShowMore)}>
                    ver mais
                  </button>
                </Text>
              ) : (
                <Text>{rating.book.summary}</Text>
              )}
            </>
          )}
        </Description>
      </Book>
    </Container>
  )
}
