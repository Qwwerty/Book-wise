import { styled } from '@stitches/react'

export const Container = styled('main', {
  width: '100%',
  height: '100vh',

  display: 'grid',
  gridTemplateColumns: 'auto 1fr',

  padding: '$5 $5 $4 $5',
})

export const Content = styled('aside', {
  margin: '0 auto',

  width: '100%',
  maxWidth: 996,
  height: '100vh',

  backgroundColor: 'red',
  paddingTop: '4.5rem',
})
