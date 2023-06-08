import { styled } from '../../../styles'

export const Container = styled('main', {
  margin: '0 auto',
  padding: '1.25rem',

  width: '100%',
  maxWidth: '1440px',
  minHeight: '100vh',

  display: 'grid',
  gridTemplateColumns: '37.38rem 1fr',

  overflow: 'hidden',
})

export const WrapperImage = styled('div', {
  overflow: 'hidden',
  borderRadius: '10px',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    scale: '1/1',
  },
})

export const WrapperLogin = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Login = styled('div', {
  width: '100%',
  maxWidth: '23.25rem',

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

export const Authentications = styled('div', {
  marginTop: '$10',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Authentication = styled('button', {
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
