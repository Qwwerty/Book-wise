import { Image } from '@components/atoms/Image'
import { Container } from './styles'

type props = {
  src: string
  alt?: string
  size?: 'md' | 'lg'
}

export function Avatar({ src, size = 'md', alt = '' }: props) {
  return (
    <Container size={size}>
      <Image src={src} width={300} height={300} alt={alt} />
    </Container>
  )
}
