import { Image } from '@components/atoms/Image'
import { Container } from './styles'

type props = {
  src: string
  alt?: string
}

export function Avatar({ src, alt = '' }: props) {
  return (
    <Container>
      <Image src={src} width={30} height={30} alt={alt} />
    </Container>
  )
}
