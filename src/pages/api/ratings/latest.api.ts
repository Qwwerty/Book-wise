import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const ratings = await prisma.rating.findMany({
    include: {
      user: true,
      book: true,
    },
    take: 10,
    orderBy: {
      created_at: 'desc',
    },
  })
  return res.json({ ratings })
}
