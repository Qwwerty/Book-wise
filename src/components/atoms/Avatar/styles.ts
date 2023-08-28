import { styled } from '@styles/index'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 32,
  height: 32,
  borderRadius: '$full',
  overflow: 'hidden',

  background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',

  img: {
    width: 28,
    height: 28,
    objectFit: 'cover',
    borderRadius: '$full',
  },
})
