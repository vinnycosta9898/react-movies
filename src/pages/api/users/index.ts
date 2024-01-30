import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, avatar_url, email } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userExists) {
    return res.status(400).json({ message: 'User Already Exists' })
  }

  const user = await prisma.user.create({
    data: {
      name,
      avatar_url,
      email,
    },
  })

  setCookie({ res }, '@react-movies:user-id', user.id, {
    maxAge: 60 * 60 * 24, // 1 day,
    path: '/',
  })

  return res.status(200).json(user)
}
