import Image from 'next/image'
import { Container, WrapperImage } from './styles'
import { Authentications } from './components/Authentications'

import coverImg from '../../assets/cover-home.png'

export default function Login() {
  return (
    <Container>
      <WrapperImage>
        <Image src={coverImg} width={598} height={912} alt="Cover" />
      </WrapperImage>

      <Authentications />
    </Container>
  )
}
