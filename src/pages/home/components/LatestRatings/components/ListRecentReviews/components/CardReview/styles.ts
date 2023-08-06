import { styled } from '../../../../../../../../../styles'

export const Container = styled('div', {
  '& + div': {
    marginTop: '$3',
  },

  width: '100%',
  height: '17.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '$8',

  backgroundColor: '$gray700',
  borderRadius: 8,
  padding: '$6',

  variants: {
    isShowMore: {
      true: {
        height: 'auto',
      },
    },
  },
})

export const Header = styled('div', {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
})

export const HeaderInfo = styled('div', {
  display: 'flex',
  gap: '$4',

  'div:first-child': {
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
  },

  'div:last-child': {
    display: 'flex',
    flexDirection: 'column',

    p: {
      color: '$gray100',
    },

    span: {
      FontSize: '$sm',
      color: '$gray400',
    },
  },
})

export const Book = styled('div', {
  width: '100%',

  display: 'flex',
  gap: '$5',
})

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('p', {
  margin: 0,

  fontWeight: '$bold',
  color: '$gray100',
  lineHeight: '$sm',
})

export const Author = styled('span', {
  marginBottom: '$5',

  fontSize: '$sm',
  color: '$gray400',
})

export const Text = styled('span', {
  fontSize: '$sm',
  color: '$gray300',

  button: {
    all: 'unset',

    fontWeight: '$bold',
    color: '$purple100',

    '&:hover': {
      backgroundColor: '#8381D90F',
      transition: 'color .2s all',
    },
  },
})
