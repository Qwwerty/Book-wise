import { styled } from '@styles/index'

export const Container = styled('div', {
  marginBottom: '1rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    fontSize: '0.875rem',
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
