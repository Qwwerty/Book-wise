import Image from 'next/image'
import { Container, Description, Title } from './styles'

import coverImg from './images/cover.png'
import { Ratings } from '../../../../../../components/Ratings'

export function Card() {
  return (
    <Container>
      <Image src={coverImg} width={108} height={152} alt="" />

      <Description>
        <Title>
          <p>A revolução dos bichos</p>
          <span>George Orwell</span>
        </Title>

        <Ratings quantity={4} />
      </Description>
    </Container>
  )
}
