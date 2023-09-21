import { User } from 'phosphor-react'
import { MyListRecentReviews } from '@components/organims/MyListRecentReviews'
import { PageTitle } from '@components/PageTitle'
import { Container } from './styles'

interface IRating {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
  book: {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
  }
}

interface IMyLatestReviews {
  ratings: IRating[]
  isOwnProfile: boolean
}

export function MyLatestReviews({ ratings, isOwnProfile }: IMyLatestReviews) {
  return (
    <Container>
      <PageTitle
        title="Perfil"
        icon={<User size={32} />}
        css={{ marginBottom: '2.75rem' }}
      />

      <MyListRecentReviews isOwnProfile={isOwnProfile} ratings={ratings} />
    </Container>
  )
}
