import { signIn } from 'next-auth/react'
import { Image } from '@components/atoms/Image'
import { Container, Description } from './styles'

interface IAuthenticationGoogleMethod {
  callbackUrl: string
}

export function AuthenticationGoogleMethod({
  callbackUrl,
}: IAuthenticationGoogleMethod) {
  async function handleSign() {
    await signIn('google', {
      callbackUrl,
    })
  }

  return (
    <Container onClick={handleSign}>
      <Image src="/icons/google.png" width={32} height={32} alt="Google icon" />
      <Description>Sign in with Google</Description>
    </Container>
  )
}
