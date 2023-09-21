import { styled } from '@styles/index'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',

  borderLeft: '1px solid $gray700',
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.25rem',
})

export const Title = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  p: {
    margin: 0,

    fontSize: '1.25rem',
    color: '$gray100',
    fontWeight: '$bold',
    lineHeight: '$short',
    textAlign: 'center',
  },

  span: {
    fontSize: '0.875rem',
    color: '$gray400',
    fontWeight: '$bold',
    lineHeight: '$base',
    textAlign: 'center',
  },
})

export const Divider = styled('div', {
  width: '2rem',
  height: '0.25rem',

  background:
    'var(--gradient-horizontal, linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%))',
  borderRadius: '62.4375rem',
})

export const Counters = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',

  width: '100%',
  padding: '1.25rem 3.5rem',
})
