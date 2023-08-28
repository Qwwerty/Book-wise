import { styled, keyframes } from '../../../styles'

const growthBar = keyframes({
  from: {
    height: 0,
  },

  to: {
    height: 24,
  },
})

export const Container = styled('nav', {
  width: '232px',
  height: 'calc(100vh - 2.25rem)',

  background: '$gray700 url(/images/background-nav.png) no-repeat center',
  borderRadius: '12px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$10 0 $6 0',

  '> section > img': {
    marginBottom: '4rem',
  },

  a: {
    '& + a': {
      marginTop: '$4',
    },

    height: 42,

    svg: {
      width: '24px',
      height: '24px',
    },

    display: 'flex',
    alignItems: 'center',
    gap: '$3',

    textDecoration: 'none',
    color: '$gray400',
    fontWeight: '$bold',

    '&::before': {
      content: '',
      width: 4,
      height: 0,
    },

    '&.active': {
      color: '$gray100',
    },

    '&.active::before': {
      background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
      borderRadius: '$full',

      animation: `${growthBar} .2s forwards`,
    },

    '&:hover': {
      color: '$gray100',
      transition: 'color 0.3s all',
    },
  },
})

export const ButtonLogin = styled('button', {
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

export const ButtonSignOut = styled('button', {})
