import { Image } from '@components/atoms/Image'
import { Container, HeaderInfo } from './styles'
import { Ratings } from '@components/Ratings'

interface IRating {
  rate: number
  user: {
    name: string
    avatar_url: string
  }
}

interface ICardHeader {
  rating: IRating
  distance: string
}

export function CardHeader({ rating, distance }: ICardHeader) {
  return (
    <Container>
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
          <span>{distance}</span>
        </div>
      </HeaderInfo>
      <Ratings quantity={rating.rate} />
    </Container>
  )
}
