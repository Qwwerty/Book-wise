import { SignIn } from 'phosphor-react'
import { Container, Text } from './styles'

type props = React.ComponentProps<typeof Container>

export function SignInButton({ ...rest }: props) {
  return (
    <Container {...rest}>
      <Text>Fazer login</Text> <SignIn size={20} />
    </Container>
  )
}
