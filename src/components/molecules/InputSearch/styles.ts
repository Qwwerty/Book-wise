import { styled } from '@styles/index'

export const Container = styled('div', {
  width: '100%',

  display: 'flex',
  justifyContent: 'flex-end',
})

export const SearchContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  width: '100%',
  height: '3rem',
  border: '1px solid $gray500',
  borderRadius: 4,
  padding: '0.88rem $5',

  color: '$gray500',
  transition: 'border-color 500ms ease-out',

  input: {
    flex: 1,

    backgroundColor: 'transparent',
    border: 0,
    outline: 'none',

    fontSize: '$sm',
    color: '$gray200',

    '&::placeholder': {
      fontSize: '$sm',
      color: '$gray400',
    },
  },

  svg: {
    color: 'unset',
  },

  '&:focus-within': {
    border: '1px solid $grenn200',
    color: '$grenn200',
  },
})
