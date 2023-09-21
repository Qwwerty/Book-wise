import { styled } from '@styles/index'

export const Container = styled('div', {
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

  img: {
    cursor: 'pointer',
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
