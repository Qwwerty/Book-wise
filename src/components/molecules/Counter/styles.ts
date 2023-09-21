import { styled } from '@styles/index'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  svg: {
    width: '2rem',
    height: '2rem',
    color: '$grenn100',
  },
})

export const CounterTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  p: {
    margin: 0,

    fontSize: '1rem',
    color: '$gray100',
    fontWeight: '$bold',
    lineHeight: '$short',
  },

  span: {
    fontSize: '0.875rem',
    color: '$gray400',
    fontWeight: '$bold',
    lineHeight: '$base',
    textAlign: 'center',
  },
})
