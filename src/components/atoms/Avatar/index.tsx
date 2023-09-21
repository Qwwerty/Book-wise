import { Image } from '@components/atoms/Image'
import { Container } from './styles'
import { ComponentProps } from '@stitches/react'

type props = {
  src: string
  alt?: string
  size?: 'md' | 'lg'
} & ComponentProps<typeof Container>

export function Avatar({ src, size = 'md', alt = '', ...rest }: props) {
  return (
    <Container size={size} {...rest}>
      <Image src={src} width={300} height={300} alt={alt} />
    </Container>
  )
}
