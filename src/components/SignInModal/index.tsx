import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { Actions, ButtonClose, Content, Overlay } from './styles'

import googleImg from '../../assets/icons/google.png'
import githubImg from '../../assets/icons/github.png'
import { X } from 'phosphor-react'
import { signIn } from 'next-auth/react'

interface SignInModalProps {
  bookId?: string | null
  open: boolean
  onOpenChange: (value: boolean) => void
  callbackUrl: string
}

export function SignInModal({
  bookId,
  open,
  onOpenChange,
  callbackUrl,
}: SignInModalProps) {
  const url = bookId ? `/${callbackUrl}?bookId=${bookId}` : `/${callbackUrl}`

  async function handleSignWithGoogle() {
    await signIn('google', {
      callbackUrl: url,
    })
  }

  async function handleSignWithGithub() {
    await signIn('github', {
      callbackUrl: url,
    })
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild />
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Close asChild>
            <ButtonClose>
              <X size={24} />
            </ButtonClose>
          </Dialog.Close>

          <h6>Faça login para deixar sua avaliação</h6>

          <Actions>
            <button onClick={handleSignWithGoogle}>
              <Image src={googleImg} width={32} height={32} alt="Google" />
              Entrar com Google
            </button>
            <button onClick={handleSignWithGithub}>
              <Image src={githubImg} width={32} height={32} alt="Google" />
              Entrar com GitHub
            </button>
          </Actions>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
