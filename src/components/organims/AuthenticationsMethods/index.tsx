import { Container } from './styles'
import { AuthenticationGoogleMethod } from '@components/molecules/AuthenticationGoogleMethod'
import { AuthenticationGithubMethod } from '@components/molecules/AuthenticationGithubMethod'
import { AuthenticationVisitorMethod } from '@components/molecules/AuthenticationVisitorMethod'

export function AuthenticationsMethods() {
  return (
    <Container>
      <AuthenticationGoogleMethod />
      <AuthenticationGithubMethod />
      <AuthenticationVisitorMethod />
    </Container>
  )
}
