import { styled } from '@styles/index'

export const Container = styled('section', {
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
