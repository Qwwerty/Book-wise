import { SignInButton } from '@components/molecules/SignInButton'
import { SignOutButton } from '@components/molecules/SignOutButton'
import { useSession } from 'next-auth/react'

export function SidebarAuthentication() {
  const session = useSession()

  const isSignedIn = session.status === 'authenticated'

  if (isSignedIn) {
    return <SignOutButton />
  }

  return <SignInButton />
}
