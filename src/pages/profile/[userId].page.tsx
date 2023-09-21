import { DefaultLayout } from 'src/layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app.page'
import { Container } from './styles'
import { MyLatestReviews } from '@components/templates/MyLatestReviews'
import { Analytics } from '@components/molecules/Analytics'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { api } from '@lib/axios'
import { Fragment, useState } from 'react'

export interface IProfileData {
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
  readAuthors: number
  ratedBooks: number
  mostReadCategory: string | null
}

const Profile: NextPageWithLayout = () => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const userId = router.query.userId as string

  const { data: session } = useSession()

  const isOwnProfile = session?.user?.id === userId

  const { data: profile } = useQuery<IProfileData>(
    ['profile', userId],
    async () => {
      const { data } = await api.get(`/profile/${userId}`)

      setIsLoading(false)
      return data?.profile ?? null
    },
    { enabled: !!userId },
  )

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      {profile ? (
        <Fragment>
          <MyLatestReviews
            ratings={profile?.ratings ?? []}
            isOwnProfile={isOwnProfile}
          />
          <Analytics
            user={profile.user}
            readPages={profile?.readPages}
            readAuthors={profile.readAuthors}
            ratedBooks={profile?.ratedBooks}
            mostReadCategory={profile?.mostReadCategory}
          />
        </Fragment>
      ) : (
        <></>
      )}
    </Container>
  )
}

Profile.getLayout = (page) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>
}

export default Profile
