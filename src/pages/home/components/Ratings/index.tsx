import { Star } from 'phosphor-react'
import { Container } from './styles'

interface RatingsProps {
  quantity: number
}

export function Ratings({ quantity = 1 }: RatingsProps) {
  const quantityOulineStars = 5 - quantity

  return (
    <Container>
      {new Array(quantity).fill(null).map((item, index) => (
        <Star weight="fill" width={16} key={index} />
      ))}

      {new Array(quantityOulineStars).fill(null).map((item, index) => (
        <Star width={16} key={index} />
      ))}
    </Container>
  )
}
