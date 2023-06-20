import { styled } from '../../../styles'

export const Container = styled('h1', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    color: '$grenn100',
  },

  fontWeight: '$bold',
  fontSize: '$2xl',
  color: '$gray100',
  lineHeight: '$short',
})
