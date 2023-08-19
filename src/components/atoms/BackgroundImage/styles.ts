import { styled } from '@styles/index'
import ImageNextJs from 'next/image'

export const Image = styled(ImageNextJs, {
  height: 'calc(100vh - 2.5rem)',
  objectFit: 'cover',

  borderRadius: '$md',
})
