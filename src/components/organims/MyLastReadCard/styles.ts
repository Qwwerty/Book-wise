import { styled } from '@styles/index'

export const Container = styled('div', {
  width: '100%',

  display: 'flex',
  gap: '$6',
  padding: '$5 $6',

  backgroundColor: '$gray600',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})
