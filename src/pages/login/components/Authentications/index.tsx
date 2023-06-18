import Image from 'next/image'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { Container, Method, Methods, Title, Wrapper } from './styles'

import googleImg from '../../../../assets/icons/google.png'
import githubImg from '../../../../assets/icons/github.png'
import rocketImg from '../../../../assets/icons/rocket.png'

export function Authentications() {
  const router = useRouter()

  async function handleSignWithGoogle() {
    await signIn('google', {
      callbackUrl: '/home',
    })
  }

  async function handleSignWithVisitor() {
    await router.push('/home')
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          <h4>Boas vindas!</h4>
          <span>Faça seu login ou acesse como visitante.</span>
        </Title>

        <Methods>
          <Method onClick={handleSignWithGoogle}>
            <Image
              src={googleImg}
              width={32}
              height={32}
              alt="Icone do Google"
            />
            <span>Entrar com Google</span>
          </Method>

          <Method>
            <Image
              src={githubImg}
              width={32}
              height={32}
              alt="Icone do Github"
            />
            <span>Entrar com GitHub</span>
          </Method>

          <Method onClick={handleSignWithVisitor}>
            <Image
              src={rocketImg}
              width={32}
              height={32}
              alt="Icone de foguete"
            />
            <span>Acessar como visitante</span>
          </Method>
        </Methods>
      </Wrapper>
    </Container>
  )
}
