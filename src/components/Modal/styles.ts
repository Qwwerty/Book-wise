import { styled, keyframes } from '@stitches/react'

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

export const Container = styled('main', {
  width: '100%',
  height: '100vh',

  position: 'fixed',
  top: 0,
  left: 0,

  backgroundColor: 'rgba(0, 0, 0, 0.60)',

  animation: `${fadeIn} 0.3s`,
})

export const Content = styled('aside', {
  marginLeft: 'auto',

  width: '100%',
  maxWidth: '660px',
  height: '100%',
  padding: '4rem 3rem 3rem 3rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',

  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.50)',

  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '0.375rem',
    backgroundColor: '$gray700',
  },

  '&::-webkit-scrollbar-thumb': {
    height: '26.9375rem',
    borderRadius: '$full',
    backgroundColor: '$gray600',
  },
})

export const ButtonClose = styled('button', {
  all: 'unset',

  position: 'absolute',
  top: 24,
  right: 48,

  cursor: 'pointer',

  svg: {
    width: '1.5rem',
    height: '1.5rem',

    color: '$gray400',
    transition: 'color 200ms ease-in-out',
  },

  '&:hover': {
    svg: {
      color: '$gray500',
    },
  },
})

export const BookDetail = styled('section', {
  width: '100%',
  padding: '1.5rem 2rem 1rem 2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',

  backgroundColor: '$gray700',
  borderRadius: '0.625rem',
})

export const Book = styled('div', {
  width: '100%',

  display: 'flex',
  gap: '2rem',
})

export const BookCover = styled('div', {
  width: '100%',
  maxWidth: 171,
  height: 242,

  overflow: 'hidden',
  borderRadius: '0.625rem',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '> div:first-child': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },

  '> div:last-child': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
})

export const BookTitle = styled('p', {
  fontSize: '1.125rem',
  color: '$gray100',
  fontWeight: '$bold',
  lineHeight: '$short',
})

export const BookAuthor = styled('span', {
  fontSize: '1rem',
  color: '$gray300',
  lineHeight: '$base',
})

export const BookQuantityRate = styled('span', {
  fontSize: '0.875rem',
  color: '$gray400',
  lineHeight: '$base',
})

export const About = styled('section', {
  width: '100%',
  padding: '1.5rem 0',

  display: 'flex',
  alignItems: 'center',
  gap: '3.5rem',

  borderTop: '1px solid $gray600',
})

export const Category = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  padding: '0 0.25rem',

  svg: {
    color: '$grenn100',
  },
})

export const CategoryText = styled('div', {
  width: '100%',
  maxWidth: '13.2rem',

  p: {
    fontSize: '0.875rem',
    color: '$gray300',
    lineHeight: '$base',
  },

  span: {
    color: '$gray200',

    fontSize: '1rem',
    fontWeight: '$bold',
    lineHeight: '$short',
  },
})
export const Page = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  padding: '0 0.25rem',

  svg: {
    color: '$grenn100',
  },
})

export const PageText = styled('div', {
  width: '100%',
  maxWidth: '13.2rem',

  p: {
    fontSize: '0.875rem',
    color: '$gray300',
    lineHeight: '$base',
  },

  span: {
    color: '$gray200',

    fontSize: '1rem',
    fontWeight: '$bold',
    lineHeight: '$short',
  },
})

export const Comments = styled('section', {
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

export const Comment = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.125rem',

  padding: '1.5rem',
  borderRadius: '0.5rem',
  backgroundColor: '$gray700',
})

export const HeaderComment = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
})

export const UserInfo = styled('div', {
  flex: 1,

  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const UserInfoImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 40,
  height: 40,
  borderRadius: '$full',
  overflow: 'hidden',

  background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',

  img: {
    width: 36,
    height: 36,
    objectFit: 'cover',
    borderRadius: '$full',
  },
})

export const UserInfoDescription = styled('div', {
  p: {
    fontSize: '1rem',
    color: '$gray100',
    fontWeight: '$bold',
    lineHeight: '$short',
  },

  span: {
    fontSize: '0.875rem',
    color: '$gray400',
    lineHeight: '$base',
  },
})

export const CommentText = styled('span', {
  fontSize: '0.875rem',
  color: '$gray300',
  lineHeight: '$base',
})

export const NewComment = styled('div', {
  width: '100%',
  padding: '1.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  backgroundColor: '$gray700',
  borderRadius: '0.5rem',
})

export const NewCommentHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const NewCommentUser = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const NewCommentText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  textArea: {
    all: 'unset',

    width: '100%',
    height: '10.25rem',

    resize: 'none',

    fontSize: '0.875rem',
    color: '$gray200',
    lineHeight: '$base',

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
  position: 'relative',
  padding: '0.88rem 1.25rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray500',
  background: '$gray800',

  span: {
    position: 'absolute',
    right: '0.5rem',
    bottom: '0.25rem',

    fontSize: '0.75rem',
    color: '$gray400',
    lineHeight: '$base',
  },

  '&:focus-within': {
    borderColor: '$grenn200',
  },
})

export const NewCommentActions = styled('div', {
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
