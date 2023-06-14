import { styled } from '../../../styles'

export const Container = styled('main', {
  margin: '0 auto',
  padding: '1.25rem',

  width: '100%',
  maxWidth: '1440px',
  minHeight: '100vh',

  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr',
})

export const WrapperImage = styled('section', {
  width: '100%',
  maxWidth: '37.38rem',
  height: '100%',

  img: {
    width: '100%',
    height: 'calc(100vh - 2.5rem)',
  },
})
