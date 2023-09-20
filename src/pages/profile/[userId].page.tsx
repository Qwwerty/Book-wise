import { DefaultLayout } from 'src/layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app.page'
import { Container } from './styles'
import { MyLatestReviews } from '@components/templates/MyLatestReviews'

const Profile: NextPageWithLayout = () => {
  return (
    <Container>
      <MyLatestReviews />
    </Container>
  )
}

Profile.getLayout = (page) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>
}

export default Profile
