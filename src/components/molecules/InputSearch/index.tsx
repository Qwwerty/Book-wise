import { MagnifyingGlass } from 'phosphor-react'
import { Container, SearchContent } from './styles'

interface IInputSearch {
  setSearch: (value: string) => void
}

export function InputSearch({ setSearch }: IInputSearch) {
  return (
    <Container>
      <SearchContent>
        <input
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar livro ou autor"
        />
        <MagnifyingGlass size={20} />
      </SearchContent>
    </Container>
  )
}
