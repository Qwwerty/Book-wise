import { styled, keyframes } from '@styles/index'

const backInRight = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(200px) ',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const Container = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  animation: `${backInRight} 1s ease-in-out forwards`,
})
