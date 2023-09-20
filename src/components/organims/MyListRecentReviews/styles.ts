import { styled } from '@styles/index'

export const Container = styled('div', {
  width: '100%',
  height: '100%',
  paddingBottom: '$10',

  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
})

export const Title = styled('span', {
  marginBottom: '$4',

  display: 'inline-block',
  fontSize: '$sm',
  color: '$gray100',
})
