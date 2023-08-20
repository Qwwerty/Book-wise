import { styled } from '@styles/index'

export const Container = styled('button', {
  all: 'unset',

  width: '100%',
  padding: '$5 $6',

  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  backgroundColor: '$gray600',
  borderRadius: '8px',
  boxSizing: 'border-box',

  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.9)',
    transition: 'filter 0.2s all',
  },
})

export const Description = styled('span', {
  fontSize: '1.125rem',
  color: '$gray200',
  fontWeight: '$bold',
  lineheight: '$base',
})
