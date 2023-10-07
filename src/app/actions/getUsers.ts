import { getSession } from '@/app/actions/getSession'
import prisma from '@/libs/prismadb'

export const getUsers = async () => {
  const session = await getSession()

  if (!session?.user?.email) {
    return []
  }

  try {
    return await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    })
  } catch (error) {
    console.error('Something went wrong with "getUsers":', error)
    return []
  }
}
