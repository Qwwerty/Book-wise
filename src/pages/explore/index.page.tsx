import { Binoculars } from 'phosphor-react'
import { PageTitle } from '../../components/PageTitle'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app.page'
import { Container } from './styles'
import { useState } from 'react'
import { InputSearch } from '@components/molecules/InputSearch'
import { Categories } from '@components/molecules/Categories'
import { ListBooks } from '@components/organims/ListBooks'

const Explore: NextPageWithLayout = () => {
  const [category, setCategory] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  return (
    <Container>
      <PageTitle
        title="Explorar"
        icon={<Binoculars size={32} />}
        css={{ marginBottom: '2.75rem' }}
      />

      <InputSearch setSearch={setSearch} />
      <Categories handleSetCategory={setCategory} category={category} />
      <ListBooks category={category} search={search} />
    </Container>
  )
}

Explore.getLayout = (page) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default Explore
