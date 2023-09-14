import { styled } from '@styles/index'

export const Container = styled('div', {
  marginBottom: '$3',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    fontSize: '$sm',
    color: '$gray300',
  },
})
