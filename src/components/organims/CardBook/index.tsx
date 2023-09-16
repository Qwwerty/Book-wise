import Image from 'next/image'
import { AlreadyRead, Container, Description, Title } from './styles'
import { Ratings } from '@components/Ratings'

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
  ratings: number
  avgRating: number
  alreadyRead: boolean
}

interface CardBook {
  book: Book
  handleSelectBook: (bookId: string) => void
}

export function CardBook({ book, handleSelectBook }: CardBook) {
  function handleOpenBook() {
    handleSelectBook(book.id)
  }

  return (
    <>
      <Container onClick={handleOpenBook}>
        {book.alreadyRead && <AlreadyRead>LIDO</AlreadyRead>}

        <Image src={book.cover_url} width={108} height={152} alt={book.name} />

        <Description>
          <Title>
            <p>{book.name}</p>
            <span>{book.author}</span>
          </Title>

          <Ratings quantity={book.avgRating} />
        </Description>
      </Container>
    </>
  )
}
