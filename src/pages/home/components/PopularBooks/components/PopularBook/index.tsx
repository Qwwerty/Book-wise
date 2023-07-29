import Image from 'next/image'
import { BookAuthor, BookName, Container, Description } from './styles'

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
          <BookName>{book.name}</BookName>
          <BookAuthor>{book.author}</BookAuthor>
        </div>

        <Ratings quantity={book.rate} />
      </Description>
    </Container>
  )
}
