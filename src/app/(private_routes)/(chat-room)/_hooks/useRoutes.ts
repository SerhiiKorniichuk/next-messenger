import { useConversation } from '@/app/(private_routes)/(chat-room)/_hooks/useConversation'
import { As } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { BiSolidMessageDetail } from 'react-icons/bi'
import { HiUsers } from 'react-icons/hi2'

export interface RouteOptions {
  label: string
  href?: string
  icon: As
  active?: boolean
  onClick?: () => void
}

const PATHNAME = {
  conversations: '/',
  users: '/users',
}

export const useRoutes = () => {
  const pathname = usePathname()
  const { conversationId } = useConversation()

  return useMemo<RouteOptions[]>(
    () => [
      {
        label: 'Chat',
        href: PATHNAME.conversations,
        icon: BiSolidMessageDetail,
        active: pathname === PATHNAME.conversations || !!conversationId,
      },
      {
        label: 'Users',
        href: PATHNAME.users,
        icon: HiUsers,
        active: pathname === PATHNAME.users,
      },
    ],
    [pathname, conversationId],
  )
}
