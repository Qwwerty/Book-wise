import { styled } from '@styles/index'

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
