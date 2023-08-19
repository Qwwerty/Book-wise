import { useRouter } from 'next/router'
import { Image } from '@components/atoms/Image'
import { Container, Description } from './styles'

export function AuthenticationVisitorMethod() {
  const router = useRouter()

  async function handleSign() {
    await router.push('/home')
  }

  return (
    <Container onClick={handleSign}>
      <Image src="/icons/rocket.png" width={32} height={32} alt="Rocket icon" />
      <Description>Enter as a guest</Description>
    </Container>
  )
}
