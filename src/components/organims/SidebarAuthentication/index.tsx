import { SignOutButton } from '@components/molecules/SignOutButton'
import { useSession } from 'next-auth/react'
import { SidebarSignIn } from '../SidebarSignIn'

export function SidebarAuthentication() {
  const session = useSession()

  const isSignedIn = session.status === 'authenticated'

  if (isSignedIn) {
    return <SignOutButton />
  }

  return <SidebarSignIn />
}
