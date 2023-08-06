import { styled } from '../../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
})

export const Button = styled('button', {
  all: 'unset',

  border: '1px solid $purple100',
  borderRadius: '$full',
  padding: '$1 $4',
  color: '$purple100',

  transition: 'all 300ms ease-out',

  '&:hover': {
    backgroundColor: '$purple200',
    color: '$gray100',
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$purple200',
        color: '$gray100',
        borderColor: 'transparent',
      },
    },
  },
})
