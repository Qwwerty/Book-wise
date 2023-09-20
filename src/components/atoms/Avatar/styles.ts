import { styled } from '@styles/index'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 32,
  height: 32,
  borderRadius: '$full',
  overflow: 'hidden',

  background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',

  variants: {
    size: {
      md: {
        width: '2rem',
        height: '2rem',

        img: {
          width: '1.75rem',
          height: '1.75rem',
          objectFit: 'cover',
          borderRadius: '$full',
        },
      },
      lg: {
        width: '4.5rem',
        height: '4.5rem',

        img: {
          width: '4.25rem',
          height: '4.25rem',
          objectFit: 'cover',
          borderRadius: '$full',
        },
      },
    },
  },
})
