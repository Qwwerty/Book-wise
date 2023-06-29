import { styled } from '../../../../../styles'

export const Container = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  paddingRight: '$2',

  '&::-webkit-scrollbar': {
    width: 2,
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
  },
})
