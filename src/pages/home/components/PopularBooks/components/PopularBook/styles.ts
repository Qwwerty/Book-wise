import { styled } from '../../../../../../../styles'

export const Container = styled('div', {
  width: '100%',

  display: 'flex',
  gap: '$5',

  backgroundColor: '$gray700',
  padding: '1.125rem $5',
  borderRadius: 8,
  border: '2px solid transparent',
  cursor: 'pointer',
  transition: 'border 500ms ease-out',

  '&:hover': {
    border: '2px solid $gray600',
  },
})

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookName = styled('p', {
  fontSize: '1rem',
  fontWeight: '$bold',
  color: '$gray100',
  lineHeight: '$short',

  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  'line-clamp': 2,
  '-webkit-box-orient': 'vertical',
})

export const BookAuthor = styled('span', {
  fontSize: '0.875rem',
  color: '$gray400',
  lineHeight: '$base',

  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-line-clamp': 1,
  'line-clamp': 1,
  '-webkit-box-orient': 'vertical',
})
