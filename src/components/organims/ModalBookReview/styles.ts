import * as Dialog from '@radix-ui/react-dialog'
import { styled, keyframes } from '@styles/index'

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const Overlay = styled(Dialog.Overlay, {
  background: 'rgba(0 0 0 / 0.5)',
  position: 'fixed',
  inset: '0',
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,

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

export const Container = styled('main', {
  width: '100%',
  height: '100vh',

  position: 'fixed',
  top: 0,
  left: 0,

  backgroundColor: 'rgba(0, 0, 0, 0.60)',
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
