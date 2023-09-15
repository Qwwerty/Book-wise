import { styled } from '@styles/index'

export const Container = styled('div', {
  width: '100%',
})

export const Navigation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '> span': {
    color: '$gray100',
    fontSize: '$sm',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',

    color: '$purple100',
    fontSize: '$sm',
    fontWeight: '$bold',
    textDecoration: 'none',

    svg: {
      color: '$purple100',
    },

    padding: '4px 8px',
    borderRadius: 4,

    '&:hover': {
      backgroundColor: '#8381D90F',
      transition: 'color .2s all',
    },
  },
})
