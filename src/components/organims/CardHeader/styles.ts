import { styled } from '@styles/index'

export const Container = styled('div', {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
})

export const HeaderInfo = styled('div', {
  display: 'flex',
  gap: '$4',

  img: {
    cursor: 'pointer',
  },

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
