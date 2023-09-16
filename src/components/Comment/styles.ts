import { styled, keyframes } from '@styles/index'

const rotation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const Container = styled('form', {
  width: '100%',
  padding: '1.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  backgroundColor: '$gray700',
  borderRadius: '0.5rem',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const IdentificationUser = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  span: {
    fontSize: '1rem',
    color: '$gray100',
    fontWeight: '$bold',
    lineHeight: '$short',
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  textArea: {
    width: '100%',
    height: '10.25rem',

    resize: 'none',

    fontSize: '0.875rem',
    color: '$gray200',
    lineHeight: '$base',

    border: 0,
    outline: 'none',
    backgroundColor: 'transparent',

    '&::placeholder': {
      fontSize: '0.875rem',
      color: '$gray400',
      lineHeight: '$base',
    },

    '&::-webkit-scrollbar': {
      width: 0,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
    },
  },
})

export const TextAreaContainer = styled('div', {
  padding: '0.88rem 1.25rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray500',
  background: '$gray800',

  '&:focus-within': {
    borderColor: '$grenn200',
  },
})

export const TextAreaFooter = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const TextAreaLimit = styled('span', {
  fontSize: '0.75rem',
  color: '$gray400',
  lineHeight: '$base',
})

export const CommentActions = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.5rem',

  button: {
    all: 'unset',

    display: 'flex',
    padding: ' 0.5rem',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: '0.25rem',
    backgroundColor: '$gray600',

    transition: 'background 200ms ease',

    '&:hover': {
      backgroundColor: '$gray500',
    },

    '&:first-child': {
      svg: {
        color: '$purple100',
      },
    },

    '&:last-child': {
      svg: {
        color: '$grenn100',
      },
    },
  },
})

export const SpinnerButton = styled('button', {
  all: 'unset',

  display: 'flex',
  padding: ' 0.5rem',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '0.25rem',
  backgroundColor: '$gray600',
  cursor: 'not-allowed',

  div: {
    width: '1rem',
    height: '1rem',

    border: '2px solid transparent',
    borderBottomColor: '$purple100',
    borderRightColor: '$purple100',
    borderLeftColor: '$purple100',
    borderRadius: '50%',

    animation: `${rotation} 1s linear infinite`,
  },
})

export const FormError = styled('span', {
  fontSize: '0.75rem',
  color: '#f75a68',
  lineHeight: '$base',
})
