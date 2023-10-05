import { getCurrentUser } from '@/app/actions/getCurrentUser'
import prisma from '@/libs/prismadb'

export const getConversationById = async (id: string) => {
  try {
    const user = await getCurrentUser()

    if (!user?.email) {
      return null
    }

    return await prisma.conversation.findUnique({
      where: {
        id,
      },
      include: {
        users: true,
      },
    })
  } catch (error) {
    console.error('Something went wrong with "getConversationById":', error)
    return null
  }
}
