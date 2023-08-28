import { SignIn } from 'phosphor-react'
import { Container, Text } from './styles'
import { signIn } from 'next-auth/react'

export function SignInButton() {
  return (
    <Container onClick={() => signIn()}>
      <Text>Fazer login</Text> <SignIn size={20} />
    </Container>
  )
}
