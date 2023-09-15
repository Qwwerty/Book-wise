import { MyLatestReviews } from '@components/templates/MyLatestReviews'
import { PopularBooks } from '@components/organims/PopularBooks'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app.page'
import { Container } from './styles'

const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <MyLatestReviews />
      <PopularBooks />
    </Container>
  )
}

Home.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default Home
