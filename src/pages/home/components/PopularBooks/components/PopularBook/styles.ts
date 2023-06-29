import { styled } from '../../../../../../../styles'

export const Container = styled('div', {
  width: '100%',

  display: 'flex',
  gap: '$5',

  backgroundColor: '$gray700',
  padding: '1.125rem $5',
  borderRadius: 8,
})

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
