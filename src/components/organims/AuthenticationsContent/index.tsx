import { AuthenticationsTitle } from '@components/molecules/AuthenticationsTitle'
import { AuthenticationsMethods } from '../AuthenticationsMethods'
import { Container } from './styles'

export function AuthenticationsContent() {
  return (
    <Container>
      <AuthenticationsTitle />
      <AuthenticationsMethods />
    </Container>
  )
}
