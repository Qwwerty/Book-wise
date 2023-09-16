import * as Dialog from '@radix-ui/react-dialog'

import { Actions, ButtonClose, Content, Overlay } from './styles'
import { X } from 'phosphor-react'
import { AuthenticationGoogleMethod } from '@components/molecules/AuthenticationGoogleMethod'
import { AuthenticationGithubMethod } from '@components/molecules/AuthenticationGithubMethod'

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
            <AuthenticationGoogleMethod callbackUrl={url} />
            <AuthenticationGithubMethod callbackUrl={url} />
          </Actions>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
