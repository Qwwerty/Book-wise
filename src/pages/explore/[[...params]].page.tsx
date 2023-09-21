import { Binoculars } from 'phosphor-react'
import { PageTitle } from '../../components/PageTitle'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app.page'
import { Container, ContainerInputSearch, Header } from './styles'
import { useState } from 'react'
import { InputSearch } from '@components/molecules/InputSearch'
import { Categories } from '@components/molecules/Categories'
import { ListBooks } from '@components/organims/ListBooks'

const Explore: NextPageWithLayout = () => {
  const [category, setCategory] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  return (
    <Container>
      <Header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />

        <ContainerInputSearch>
          <InputSearch setSearch={setSearch} />
        </ContainerInputSearch>
      </Header>

      <Categories handleSetCategory={setCategory} category={category} />
      <ListBooks category={category} search={search} />
    </Container>
  )
}

Explore.getLayout = (page) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default Explore
