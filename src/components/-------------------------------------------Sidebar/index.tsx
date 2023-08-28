import { useState } from 'react'

import { SignInModal } from '../SignInModal'

export function Sidebar() {
  const [openSignIn, setOpenSignIn] = useState(false)

  return (
    <>
      <SignInModal
        open={openSignIn}
        onOpenChange={setOpenSignIn}
        callbackUrl="home"
      />
    </>
  )
}
