import Image from 'next/image'
import {
  Authentication,
  Authentications,
  Container,
  Login,
  WrapperImage,
  WrapperLogin,
} from './styles'

import coverImg from '../../assets/cover-home.jpg'
import googleImg from '../../assets/icons/google.png'
import githubImg from '../../assets/icons/github.png'
import rocketImg from '../../assets/icons/rocket.png'

export default function Home() {
  return (
    <Container>
      <WrapperImage>
        <Image src={coverImg} width={598} height={912} alt="Cover" />
      </WrapperImage>

      <WrapperLogin>
        <Login>
          <h4>Boas vindas!</h4>
          <span>Faça seu login ou acesse como visitante.</span>

          <Authentications>
            <Authentication>
              <Image
                src={googleImg}
                width={32}
                height={32}
                alt="Icone do Google"
              />
              <span>Entrar com Google</span>
            </Authentication>

            <Authentication>
              <Image
                src={githubImg}
                width={32}
                height={32}
                alt="Icone do Github"
              />
              <span>Entrar com GitHub</span>
            </Authentication>

            <Authentication>
              <Image
                src={rocketImg}
                width={32}
                height={32}
                alt="Icone de foguete"
              />
              <span>Acessar como visitante</span>
            </Authentication>
          </Authentications>
        </Login>
      </WrapperLogin>
    </Container>
  )
}
