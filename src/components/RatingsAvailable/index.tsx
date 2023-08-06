import { Star } from 'phosphor-react'
import { Container } from './styles'

export function RatingsAvailable() {
  return (
    <Container>
      {new Array(5).fill(null).map((item, index) => (
        <Star width={14} key={index} />
      ))}
    </Container>
  )
}
