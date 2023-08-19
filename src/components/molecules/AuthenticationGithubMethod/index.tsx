import { signIn } from 'next-auth/react'
import { Image } from '@components/atoms/Image'
import { Container, Description } from './styles'

export function AuthenticationGithubMethod() {
  async function handleSign() {
    await signIn('github', {
      callbackUrl: '/home',
    })
  }

  return (
    <Container onClick={handleSign}>
      <Image src="/icons/github.png" width={32} height={32} alt="Github icon" />
      <Description>Sign in with Github</Description>
    </Container>
  )
}
