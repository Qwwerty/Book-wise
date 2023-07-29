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
import { getRelativeTimeString } from '../../../../../../utils/getRelativeTimeString'

interface Rating {
  id: string
  rate: number
  description: string
  created_at: string
  book: {
    name: string
    author: string
    summary: string
    cover_url: string
  }
}

interface LastReadProps {
  rating: Rating
}

export function LastRead({ rating }: LastReadProps) {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  return (
    <Container>
      <Description>
        <span>Sua última leitura</span>
        <Link href="/profile">
          Ver todas <CaretRight size={16} />
        </Link>
      </Description>

      <Card>
        <Image src={rating.book.cover_url} width={108} height={152} alt="" />

        <Content>
          <Status>
            <span>{distance}</span>
            <Ratings quantity={rating.rate} />
          </Status>

          <TitleBook>{rating.book.name}</TitleBook>
          <Author>{rating.book.author}</Author>

          <Resume>{rating.book.summary}</Resume>
        </Content>
      </Card>
    </Container>
  )
}
