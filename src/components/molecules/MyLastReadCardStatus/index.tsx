import { Ratings } from '@components/Ratings'
import { Container } from './styles'

interface IMyLastReadCardStatus {
  distance: string
  rate: number
}

export function MyLastReadCardStatus({
  distance,
  rate,
}: IMyLastReadCardStatus) {
  return (
    <Container>
      <span>{distance}</span>
      <Ratings quantity={rate} />
    </Container>
  )
}
