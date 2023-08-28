import { styled } from '@styles/index'

export const Container = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$bold',

  cursor: 'pointer',

  svg: {
    width: '20px',
    height: '20px',
    color: '$grenn100',
  },

  '&:hover': {
    filter: 'brightness(0.9)',
    transition: 'filter 0.2s all',
  },
})

export const Text = styled('span', {
  color: '$gray200',
  fontSize: '1rem',
  fontWeight: '$bold',
  lineHeight: '$base',
  textAlign: 'center',
})
