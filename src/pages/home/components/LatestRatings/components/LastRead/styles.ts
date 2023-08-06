import { styled } from '../../../../../../../styles'

export const Container = styled('div', {
  marginBottom: '2.5rem',
  width: '100%',
})

export const Description = styled('div', {
  marginBottom: '$4',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    fontSize: '$sm',
    color: '$gray100',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',

    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$purple100',
    textDecoration: 'none',
    padding: '4px 8px',
    borderRadius: 4,

    '&:hover': {
      backgroundColor: '#8381D90F',
      transition: 'color .2s all',
    },
  },
})

export const Card = styled('div', {
  width: '100%',

  display: 'flex',
  gap: '$6',
  padding: '$5 $6',

  backgroundColor: '$gray600',
  borderRadius: 8,
  border: '2px solid transparent',
  transition: 'border 500ms ease-out',

  '&:hover': {
    border: '2px solid $gray500',
  },

  img: {
    objectFit: 'cover',
  },
})

export const Content = styled('div', {})

export const Status = styled('div', {
  marginBottom: '$3',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    fontSize: '$sm',
    color: '$gray300',
  },
})

export const TitleBook = styled('p', {
  fontWeight: '$bold',
  color: '$gray100',
  lineHeight: '$short',
})

export const Author = styled('span', {
  marginBottom: '$6',

  display: 'inline-block',
  fontSize: '$sm',
  color: '$gray400',
})

export const Resume = styled('p', {
  fontSize: '$sm',
  color: '$gray300',

  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  'line-clamp': 2,
  '-webkit-box-orient': 'vertical',
})
