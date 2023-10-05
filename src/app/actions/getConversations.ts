import { getCurrentUser } from '@/app/actions/getCurrentUser'
import prisma from '@/libs/prismadb'

export const getConversations = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser?.id) {
    return []
  }

  try {
    return await prisma.conversation.findMany({
      orderBy: {
        lastMessageAt: 'desc',
      },
      where: {
        userIds: {
          has: currentUser.id,
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
            seen: true,
          },
        },
      },
    })
  } catch (error) {
    console.error('Something went wrong with "getConversations":', error)
    return []
  }
}