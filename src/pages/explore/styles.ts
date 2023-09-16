import { styled } from '../../../styles'

export const Container = styled('main', {
  height: 'calc(100% - 35px)',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: 0,
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
  },
})
