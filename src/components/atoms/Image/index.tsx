import { ImageProps } from 'next/image'
import { NextImage } from './styles'

type props = ImageProps

export function Image({ ...rest }: props) {
  return <NextImage {...rest} />
}
