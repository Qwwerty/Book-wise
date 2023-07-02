import Image from 'next/image'
import { Container, Description } from './styles'

import { Ratings } from '../../../../../../components/Ratings'

interface Book {
  id: string
  name: string
  author: string
  cover_url: string
  rate: number
}

interface PopularBookProps {
  book: Book
}

export function PopularBook({ book }: PopularBookProps) {
  return (
    <Container>
      <Image src={book.cover_url} width={64} height={94} alt={book.name} />

      <Description>
        <div>
          <p>{book.name}</p>
          <span>{book.author}</span>
        </div>

        <Ratings quantity={book.rate} />
      </Description>
    </Container>
  )
}
