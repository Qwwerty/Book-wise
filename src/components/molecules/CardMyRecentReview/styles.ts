import { styled } from '@styles/index'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const ReviewDate = styled('span', {
  fontSize: '0.875rem',
  color: '$gray300',
  fontWeight: '$regular',
  lineHeight: '$base',
})

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  padding: '1.5rem',
  borderRadius: '0.5rem',
  background: '$gray700',

  position: 'relative',
  overflow: 'hidden',
})

export const Header = styled('div', {
  display: 'flex',
  gap: '1.5rem',

  '& > img': {
    borderRadius: '0.25rem',
  },
})

export const About = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Title = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.12rem',

  '& > p': {
    margin: 0,

    fontSize: '1.125rem',
    fontWeight: '$bold',
    color: '$gray100',
    lineHeight: '$short',
  },

  '& > span': {
    fontSize: '0.875rem',
    fontWeight: '$regular',
    color: '$gray400',
    lineHeight: '$base',
  },
})

export const Comment = styled('span', {
  fontSize: '0.875rem',
  color: '$gray300',
  fontWeight: '$regular',
  lineHeight: '$base',
})

export const DeleteComment = styled('button', {
  width: '1.5rem',
  height: '1.5rem',

  border: 0,
  outline: 'none',
  background: 'transparent',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',

  cursor: 'pointer',

  svg: {
    width: '1.5rem',
    height: '1.5rem',
    color: '$gray400',

    transition: 'color 200ms ease-in-out',
  },

  '&:hover': {
    svg: {
      color: '$gray500',
    },
  },
})
