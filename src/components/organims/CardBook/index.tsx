import { Image } from '@components/atoms/Image'
import { Author, Container, Description, Title, Text } from './styles'

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

interface ICardBook {
  rating: IRating
  isShowMore: boolean
  setIsShowMore: (value: boolean) => void
}

const MAX_LENGTH = 229

export function CardBook({ rating, isShowMore, setIsShowMore }: ICardBook) {
  const hasOverflowText = rating.book.summary.length > MAX_LENGTH

  return (
    <Container>
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
          <Text>{rating.book.summary}</Text>
        ) : (
          <>
            {!isShowMore ? (
              <Text>
                {String(rating.book.summary).slice(0, MAX_LENGTH).concat('...')}

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
    </Container>
  )
}
