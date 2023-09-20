import { Container } from './styles'
import { useState } from 'react'
import { InputSearch } from '@components/molecules/InputSearch'
import { CardMyRecentReview } from '@components/molecules/CardMyRecentReview'

export interface IRating {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
  book: {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
  }
}

interface IMyListRecentReviews {
  ratings: IRating[]
  isOwnProfile: boolean
}

export function MyListRecentReviews({
  ratings,
  isOwnProfile,
}: IMyListRecentReviews) {
  const [search, setSearch] = useState('')

  const filteredBooks = ratings?.filter((rating) => {
    return (
      rating.book.name.toLowerCase().includes(search.toLowerCase()) ||
      rating.book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <Container>
      <InputSearch setSearch={setSearch} placeholder="Buscar livro avaliado" />

      {filteredBooks?.map((rating) => (
        <CardMyRecentReview
          rating={rating}
          isOwnProfile={isOwnProfile}
          key={rating.id}
        />
      ))}
    </Container>
  )
}
