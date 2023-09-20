import { prisma } from '@lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'DELETE') return res.status(405).end()

  const ratingId = String(req.query.ratingId)

  await prisma.rating.delete({
    where: {
      id: ratingId,
    },
  })

  res.status(204).end()
}
