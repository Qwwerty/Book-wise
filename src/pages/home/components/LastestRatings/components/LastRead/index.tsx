import Link from 'next/link'
import Image from 'next/image'
import {
  Container,
  Description,
  Card,
  Status,
  Content,
  TitleBook,
  Author,
  Resume,
} from './styles'
import { CaretRight } from 'phosphor-react'
import { Ratings } from '../../../../../../components/Ratings'

import imgTmp from '../../../../../../assets/covers/entendendo-algoritmos.png'

export function LastRead() {
  return (
    <Container>
      <Description>
        <span>Sua última leitura</span>
        <Link href="/profile">
          Ver todas <CaretRight size={16} />
        </Link>
      </Description>

      <Card>
        <Image src={imgTmp} width={108} height={152} alt="" />

        <Content>
          <Status>
            <span>Há 2 dias</span>
            <Ratings quantity={3} />
          </Status>

          <TitleBook>Entendendo Algoritmos</TitleBook>
          <Author>Aditya Bhargava</Author>

          <Resume>
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectu...
          </Resume>
        </Content>
      </Card>
    </Container>
  )
}
