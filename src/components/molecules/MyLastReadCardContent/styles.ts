import { styled } from '@styles/index'

export const Container = styled('div', {})

export const Status = styled('div', {
  marginBottom: '$3',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    fontSize: '$sm',
    color: '$gray300',
  },
})

export const TitleBook = styled('p', {
  fontWeight: '$bold',
  color: '$gray100',
  lineHeight: '$short',
})

export const Author = styled('span', {
  marginBottom: '$6',

  display: 'inline-block',
  fontSize: '$sm',
  color: '$gray400',
})

export const Resume = styled('p', {
  fontSize: '$sm',
  color: '$gray300',

  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  'line-clamp': 2,
  '-webkit-box-orient': 'vertical',
})
