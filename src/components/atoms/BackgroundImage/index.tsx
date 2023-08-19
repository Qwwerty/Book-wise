import { ImageProps } from 'next/image'
import { Image } from './styles'

type props = ImageProps

export function BackgroundImage({ ...rest }: props) {
  return <Image {...rest} />
}
