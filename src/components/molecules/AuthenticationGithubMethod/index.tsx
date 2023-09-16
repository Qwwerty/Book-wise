import { signIn } from 'next-auth/react'
import { Image } from '@components/atoms/Image'
import { Container, Description } from './styles'

interface IAuthenticationGithubMethod {
  callbackUrl: string
}

export function AuthenticationGithubMethod({
  callbackUrl,
}: IAuthenticationGithubMethod) {
  async function handleSign() {
    await signIn('github', {
      callbackUrl,
    })
  }

  return (
    <Container onClick={handleSign}>
      <Image src="/icons/github.png" width={32} height={32} alt="Github icon" />
      <Description>Sign in with Github</Description>
    </Container>
  )
}
