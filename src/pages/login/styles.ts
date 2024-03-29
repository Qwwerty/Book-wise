import { styled } from '../../../styles'

export const Container = styled('main', {
  margin: '0 auto',
  padding: '1.25rem',

  width: '100%',
  maxWidth: '1440px',
  minHeight: '100vh',

  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr',
  gap: '1.125rem',

  '@media (max-width: 1024px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
