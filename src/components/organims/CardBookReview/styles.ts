import { styled } from '@styles/index'

export const Container = styled('div', {
  width: '100%',

  display: 'flex',
  gap: '$5',
})

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('p', {
  margin: 0,

  fontWeight: '$bold',
  color: '$gray100',
  lineHeight: '$sm',
})

export const Author = styled('span', {
  marginBottom: '$5',

  fontSize: '$sm',
  color: '$gray400',
})

export const Text = styled('span', {
  fontSize: '$sm',
  color: '$gray300',

  button: {
    all: 'unset',

    fontWeight: '$bold',
    color: '$purple100',

    '&:hover': {
      backgroundColor: '#8381D90F',
      transition: 'color .2s all',
    },
  },
})
