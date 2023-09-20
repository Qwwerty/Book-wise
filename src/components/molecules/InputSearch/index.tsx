import { MagnifyingGlass } from 'phosphor-react'
import { Container, SearchContent } from './styles'

interface IInputSearch {
  setSearch: (value: string) => void
  placeholder?: string
}

export function InputSearch({
  setSearch,
  placeholder = 'Buscar livro ou autor',
}: IInputSearch) {
  return (
    <Container>
      <SearchContent>
        <input
          onChange={(event) => setSearch(event.target.value)}
          placeholder={placeholder}
        />
        <MagnifyingGlass size={20} />
      </SearchContent>
    </Container>
  )
}
