import { BookOpen, BookmarkSimple } from 'phosphor-react'
import { Container } from '@components/Comment/styles'
import { Image } from '@components/atoms/Image'
import {
  About,
  Book,
  BookAuthor,
  BookCover,
  BookInfo,
  BookQuantityRate,
  BookTitle,
  Category,
  CategoryText,
} from './styles'
import { Ratings } from '@components/Ratings'
import { Page, PageText } from '@components/organims/ModalBookReview/styles'

interface IBook {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  avgRating: number
  total_pages: number
  created_at: string
  categories: Array<{
    book_id: string
    categoryId: string
    category: {
      id: string
      name: string
    }
  }>
  ratings: Array<{
    id: string
    rate: number
    description: string
    created_at: string
    book_id: string
    user_id: string
    user: {
      id: string
      email: string
      name: string
      avatar_url: string
      created_at: string
    }
  }>
}

interface IModalBookReviewDetail {
  book: IBook
}

export function ModalBookReviewDetail({ book }: IModalBookReviewDetail) {
  const amountOfComments = book.ratings.length

  const categories =
    book.categories.map((x) => x.category.name).join(', ') ?? ''

  return (
    <Container>
      <Book>
        <BookCover>
          <Image
            src={book.cover_url}
            width={171}
            height={242}
            alt={book.name}
          />
        </BookCover>

        <BookInfo>
          <div>
            <BookTitle>{book.name}</BookTitle>
            <BookAuthor>{book.author}</BookAuthor>
          </div>

          <div>
            <Ratings quantity={book.avgRating} />
            <BookQuantityRate>
              {amountOfComments}
              {amountOfComments === 1 ? ' avaliação' : ' avaliações'}
            </BookQuantityRate>
          </div>
        </BookInfo>
      </Book>

      <About>
        <Category>
          <BookmarkSimple size={24} />

          <CategoryText>
            <p>Categoria</p>
            <span>{categories}</span>
          </CategoryText>
        </Category>

        <Page>
          <BookOpen size={24} />

          <PageText>
            <p>Páginas</p>
            <span>{book.total_pages}</span>
          </PageText>
        </Page>
      </About>
    </Container>
  )
}
