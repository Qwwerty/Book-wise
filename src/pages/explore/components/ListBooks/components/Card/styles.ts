import { styled } from '../../../../../../../styles'

export const Container = styled('div', {
  width: '19.9rem',
  height: '11.5rem',
  padding: '1rem 1.25rem',

  display: 'flex',
  gap: '1.25rem',

  backgroundColor: '$gray700',
  borderRadius: '0.5rem',
  border: '2px solid transparent',
  cursor: 'pointer',
  transition: 'border 500ms ease-out',

  '&:hover': {
    border: '2px solid $gray500',
  },

  img: {
    width: '6.75rem',
    height: '9.5rem',
  },
})

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Title = styled('div', {
  p: {
    margin: 0,

    fontWeight: 700,
    fontSize: '1rem',
    color: '$gray100',
    lineHeight: '$short',
  },

  span: {
    fontSize: '0.875rem',
    color: '$gray400',
    lineHeight: '$base',
  },
})
