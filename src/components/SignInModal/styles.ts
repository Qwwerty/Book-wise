import * as Dialog from '@radix-ui/react-dialog'
import { styled, keyframes } from '../../../styles'

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
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',

  width: '32.25rem',
  padding: '3.5rem 4.5rem',

  borderRadius: '0.75rem',
  backgroundColor: '$gray700',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',

  h6: {
    color: '$gray200',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: '$bold',
    lineHeight: '$short',
  },
})

export const ButtonClose = styled(Dialog.Close, {
  all: 'unset',

  position: 'absolute',
  top: '1rem',
  right: '1rem',

  color: '$gray400',
  transition: 'color 200ms ease',

  cursor: 'pointer',

  '&:hover': {
    color: '$gray500',
  },
})

export const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  button: {
    all: 'unset',

    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',

    cursor: 'pointer',

    padding: '1.25rem 1.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '$gray600',

    fontSize: '1.125rem',
    color: '$gray200',
    fontWeight: '$bold',
    lineHeight: '$base',

    transition: 'color 300ms ease-in-out',

    '&:hover': {
      backgroundColor: '$gray500',
    },
  },
})
