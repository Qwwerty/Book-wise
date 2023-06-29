import { DefaultLayout } from '../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app.page'
import { LatestRatings } from './components/LastestRatings'
import { PopularBooks } from './components/PopularBooks'
import { Container } from './styles'

const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <LatestRatings />
      <PopularBooks />
    </Container>
  )
}

Home.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default Home
