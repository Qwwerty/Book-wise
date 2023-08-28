import { styled } from '@styles/index'

export const Container = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.9)',
    transition: 'filter 0.2s all',
  },
})

export const Text = styled('span', {
  fontSize: '0.875rem',
  color: '$gray200',
  fontWeight: '$regular',
  lineHeight: '$base',
})
