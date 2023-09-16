import { ReviewComment } from '@components/Comment'
import { Comment } from '@components/molecules/Comment'
import { CommentsList, CommentsTitle, Container } from './styles'
import { useSession } from 'next-auth/react'
import { SignInModal } from '@components/SignInModal'
import { useState } from 'react'

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

interface IModalBookReviews {
  book: IBook
}

export function ModalBookReviews({ book }: IModalBookReviews) {
  const [openSignIn, setOpenSignIn] = useState(false)
  const { data: session } = useSession()

  const canRate = book.ratings.every(
    (rate) => rate.user_id !== session?.user.id,
  )

  return (
    <>
      <Container>
        <CommentsTitle>
          <span>Avaliações</span>

          {!session && (
            <button onClick={() => setOpenSignIn(true)} type="button">
              Avaliar
            </button>
          )}
        </CommentsTitle>

        {session && canRate && (
          <ReviewComment bookId={book.id} user={session.user} />
        )}

        <CommentsList>
          {book.ratings.map((rating) => (
            <Comment rating={rating} key={rating.id} />
          ))}
        </CommentsList>
      </Container>

      <SignInModal
        bookId={book.id}
        open={openSignIn}
        onOpenChange={setOpenSignIn}
        callbackUrl="explore"
      />
    </>
  )
}
