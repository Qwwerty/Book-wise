import { MyLatestReviews } from '@components/templates/MyLatestReviews'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app.page'
import { PopularBooks } from './components/PopularBooks'
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
