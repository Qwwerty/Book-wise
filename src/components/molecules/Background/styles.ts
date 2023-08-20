import { styled, keyframes } from '@styles/index'

const backInLeft = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-200px) ',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const Container = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${backInLeft} 1s ease-in-out forwards`,

  '@media (max-width: 1024px)': {
    display: 'none',
  },
})
