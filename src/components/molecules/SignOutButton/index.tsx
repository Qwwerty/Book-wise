import { signOut, useSession } from 'next-auth/react'
import { SignOut } from 'phosphor-react'
import { Avatar } from '@components/atoms/Avatar'
import { Container, Text } from './styles'

export function SignOutButton() {
  const session = useSession()

  const username = session?.data?.user.name ?? ''
  const avatarUrl = session?.data?.user.avatar_url ?? ''

  return (
    <Container onClick={() => signOut()}>
      <Avatar src={avatarUrl} alt={username} />
      <Text>{username}</Text> <SignOut size={20} color="#F75A68" />
    </Container>
  )
}
