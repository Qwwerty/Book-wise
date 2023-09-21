import { Avatar } from '@components/atoms/Avatar'
import {
  CommentText,
  Container,
  HeaderComment,
  UserInfo,
  UserInfoDescription,
} from './styles'
import { Ratings } from '@components/Ratings'
import { getRelativeTimeString } from '@utils/getRelativeTimeString'
import { useRouter } from 'next/router'

interface IRating {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
  user: {
    id: string
    email: string
    name: string
    avatar_url: string
    created_at: string
  }
}

interface IComment {
  rating: IRating
}

export function Comment({ rating }: IComment) {
  const router = useRouter()

  async function handleToProfile(userId: string) {
    await router.push(`/profile/${userId}`)
  }

  return (
    <Container>
      <HeaderComment>
        <UserInfo>
          <Avatar
            src={rating.user.avatar_url}
            alt={rating.user.name}
            onClick={() => handleToProfile(rating.user_id)}
          />

          <UserInfoDescription>
            <p>{rating.user.name}</p>
            <span>
              {getRelativeTimeString(new Date(rating.created_at), 'pt-BR')}
            </span>
          </UserInfoDescription>
        </UserInfo>

        <Ratings quantity={rating.rate} />
      </HeaderComment>

      <CommentText>{rating.description}</CommentText>
    </Container>
  )
}
