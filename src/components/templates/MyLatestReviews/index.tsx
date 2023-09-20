import { User } from 'phosphor-react'
import { MyListRecentReviews } from '@components/organims/MyListRecentReviews'
import { PageTitle } from '@components/PageTitle'
import { Container } from './styles'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { api } from '@lib/axios'
import { Fragment } from 'react'
import { useSession } from 'next-auth/react'

interface IProfileData {
  user: {
    avatar_url: string
    name: string
    member_since: string
  }
  ratings: Array<{
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
  }>
  readPages: number
  ratedBooks: number
  mostReadCategory: null
}

export function MyLatestReviews() {
  const router = useRouter()

  const userId = router.query.userId as string

  const { data: session } = useSession()

  const isOwnProfile = session?.user?.id === userId

  const { data: profile } = useQuery<IProfileData>(
    ['profile', userId],
    async () => {
      const { data } = await api.get(`/profile/${userId}`)

      return data?.profile ?? {}
    },
    { enabled: !!userId },
  )

  return (
    <Container>
      <PageTitle
        title="Perfil"
        icon={<User size={32} />}
        css={{ marginBottom: '2.75rem' }}
      />

      {profile ? (
        <Fragment>
          <MyListRecentReviews
            isOwnProfile={isOwnProfile}
            ratings={profile.ratings}
          />
        </Fragment>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  )
}
