import prisma from '@/libs/prismadb'

export const getConversationMessages = async (id: string) => {
  try {
    return await prisma?.message.findMany({
      where: {
        conversationId: id,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    })
  } catch (error) {
    console.error('Something went wrong with "getMessages":', error)
    return []
  }
}
