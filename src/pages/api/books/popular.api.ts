import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const booksWithMoreReviews = await prisma.rating.groupBy({
    by: ['book_id'],
    _avg: {
      rate: true,
    },
    orderBy: {
      _avg: {
        rate: 'desc',
      },
    },
    take: 4,
  })

  const books = await prisma.book.findMany({
    where: {
      id: {
        in: booksWithMoreReviews.map((book) => book.book_id),
      },
    },
  })

  const booksWithAvg = booksWithMoreReviews.map((item) => {
    const book = books.find((book) => book.id === item.book_id)
    return {
      ...book,
      rate: item['_avg'].rate,
    }
  })

  return res.json({ books: booksWithAvg })
}
