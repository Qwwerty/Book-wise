import { useQuery } from '@tanstack/react-query'
import { Button, Container } from './styles'
import { api } from '../../lib/axios'

interface Category {
  id: string
  name: string
}

interface CategoriesProps {
  handleSetCategory: (category: string) => void
  category: string
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
        onClick={() => handleSetCategory('Tudo')}
        isSelected={category === 'Tudo'}
      >
        Tudo
      </Button>

      {categories?.map((item) => (
        <Button
          onClick={() => handleSetCategory(item.name)}
          isSelected={category === item.name}
          key={item.id}
        >
          {item.name}
        </Button>
      ))}
    </Container>
  )
}
