import { styled } from '@styles/index'

export const Container = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  paddingRight: '$2',

  '&::-webkit-scrollbar': {
    width: 0,
    background: 'transparent',
  },

  '&::-webkit-scrollbar-thumb': {
    height: '20rem',
    borderRadius: '$full',
    background: 'transparent',
  },
})
