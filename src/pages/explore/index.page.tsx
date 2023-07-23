import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { PageTitle } from '../../components/PageTitle'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app.page'
import { Container, Search, SearchContent } from './styles'
import { Categories } from '../../components/Categories'
import { useState } from 'react'
import { ListBooks } from './components/ListBooks'

const Explore: NextPageWithLayout = () => {
  const [category, setCategory] = useState<string | null>(null)

  return (
    <Container>
      <PageTitle
        title="Explorar"
        icon={<Binoculars size={32} />}
        css={{ marginBottom: '2.75rem' }}
      />

      <Search>
        <SearchContent>
          <input placeholder="Buscar livro ou autor" />
          <MagnifyingGlass size={20} />
        </SearchContent>
      </Search>

      <Categories handleSetCategory={setCategory} category={category} />
      <ListBooks category={category} />
    </Container>
  )
}

Explore.getLayout = (page) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default Explore
