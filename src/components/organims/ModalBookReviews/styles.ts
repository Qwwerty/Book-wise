import { styled } from '@styles/index'

export const Container = styled('section', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const CommentsTitle = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    fontSize: '0.875rem',
    color: '$gray200',
    lineHeight: '$base',
  },

  button: {
    all: 'unset',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.25rem 0.5rem',

    cursor: 'pointer',

    color: '$purple100',

    transitionDuration: '300ms',
    transitionProperty: 'background',
    transitionTimingFunction: 'ease-out',

    '&:hover': {
      borderRadius: '0.25rem',
      background: 'rgba(131, 129, 217, 0.06)',
    },
  },
})

export const CommentsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})
