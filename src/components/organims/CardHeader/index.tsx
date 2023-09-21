import { Image } from '@components/atoms/Image'
import { Container, HeaderInfo } from './styles'
import { Ratings } from '@components/Ratings'
import { useRouter } from 'next/router'
import { Avatar } from '@components/atoms/Avatar'

interface IRating {
  rate: number
  user: {
    id: string
    name: string
    avatar_url: string
  }
}

interface ICardHeader {
  rating: IRating
  distance: string
}

export function CardHeader({ rating, distance }: ICardHeader) {
  const router = useRouter()

  async function handleToProfile(userId: string) {
    await router.push(`/profile/${userId}`)
  }

  return (
    <Container>
      <HeaderInfo>
        <Avatar
          src={rating.user.avatar_url}
          alt={rating.user.name}
          onClick={() => handleToProfile(rating.user.id)}
        />

        <div>
          <p>{rating.user.name}</p>
          <span>{distance}</span>
        </div>
      </HeaderInfo>
      <Ratings quantity={rating.rate} />
    </Container>
  )
}
