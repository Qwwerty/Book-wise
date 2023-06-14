import { styled } from '../../../../../styles'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Wrapper = styled('div', {
  width: '100%',
  maxWidth: '23.25rem',
})

export const Title = styled('div', {
  h4: {
    margin: '0 0 2px 0',
    fontSize: '$2xl',
    fontWeight: '$bold',
    color: '$gray100',
    lineHeight: '$short',
  },

  '> span': {
    color: '$gray200',
  },
})

export const Methods = styled('div', {
  marginTop: '$10',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Method = styled('div', {
  all: 'unset',

  width: '100%',
  padding: '$5 $6',

  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  backgroundColor: '$gray600',
  borderRadius: '8px',

  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.9)',
    transition: 'filter 0.2s all',
  },
})
