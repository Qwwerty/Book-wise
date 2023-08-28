import { SignInModal } from '@components/SignInModal'
import { SignInButton } from '@components/molecules/SignInButton'
import { useState } from 'react'

export function SidebarSignIn() {
  const [openSignIn, setOpenSignIn] = useState(false)

  return (
    <>
      <SignInButton onClick={() => setOpenSignIn(!openSignIn)} />
      <SignInModal
        open={openSignIn}
        onOpenChange={setOpenSignIn}
        callbackUrl="home"
      />
    </>
  )
}
