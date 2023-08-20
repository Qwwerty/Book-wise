import { BackgroundImage } from '@components/atoms/BackgroundImage'
import { Container } from './styles'

export function Background() {
  return (
    <Container>
      <BackgroundImage
        src="/images/background-login.svg"
        width={598}
        height={912}
        alt="Background book-wise"
      />
    </Container>
  )
}
