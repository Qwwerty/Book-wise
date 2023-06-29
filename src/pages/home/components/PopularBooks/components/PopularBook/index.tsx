import Image from 'next/image'
import { Container, Description } from './styles'

import tmpImg from '../../../../../../assets/covers/14-habitos-de-desenvolvedores-altamente-produtivos.png'
import { Ratings } from '../../../../../../components/Ratings'

export function PopularBook() {
  return (
    <Container>
      <Image src={tmpImg} width={64} height={94} alt="" />

      <Description>
        <div>
          <p>A revolução dos bichos</p>
          <span>George Orwell</span>
        </div>

        <Ratings quantity={4} />
      </Description>
    </Container>
  )
}
