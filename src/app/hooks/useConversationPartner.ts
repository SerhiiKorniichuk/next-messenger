import { FullConversationType } from '@/app/types'
import { User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

export const useConversationPartner = (
  conversation: FullConversationType | { users: User[] },
) => {
  const session = useSession()

  return useMemo(() => {
    const currentUserEmail = session?.data?.user?.email
    const users = conversation.users.filter(
      (user) => user.email !== currentUserEmail,
    )
    return users[0]
  }, [conversation.users, session?.data?.user?.email])
}
