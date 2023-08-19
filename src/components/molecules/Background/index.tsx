import { Container } from './styles'
import { BackgroundImage } from '@components/atoms/BackgroundImage'

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
