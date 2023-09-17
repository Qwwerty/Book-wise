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

export const Header = styled('section', {
  marginBottom: '2.75rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const ContainerInputSearch = styled('div', {
  width: '100%',
  maxWidth: '27.0625rem',
})
