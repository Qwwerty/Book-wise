import { useQuery } from '@tanstack/react-query'
import { Button, Container } from './styles'
import { api } from '../../lib/axios'

interface Category {
  id: string
  name: string
}

interface CategoriesProps {
  handleSetCategory: (category: string | null) => void
  category: string | null
}

export function Categories({ category, handleSetCategory }: CategoriesProps) {
  const { data: categories } = useQuery<Category[]>(
    ['categories'],
    async () => {
      const { data } = await api.get('/books/categories')

      return data?.categories ?? []
    },
  )

  return (
    <Container>
      <Button
        onClick={() => handleSetCategory(null)}
        isSelected={category === null}
      >
        Tudo
      </Button>

      {categories?.map((item) => (
        <Button
          onClick={() => handleSetCategory(item.id)}
          isSelected={category === item.id}
          key={item.id}
        >
          {item.name}
        </Button>
      ))}
    </Container>
  )
}
