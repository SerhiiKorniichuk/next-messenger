import { getSession } from '@/app/actions/getSession'
import prisma from '@/libs/prismadb'

export const getCurrentUser = async () => {
  try {
    const session = await getSession()

    if (!session?.user?.email) {
      return null
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    })

    if (!currentUser) {
      return null
    }

    return currentUser
  } catch (error) {
    console.error('Something went wrong with "getCurrentUser":', error)
  }
}
