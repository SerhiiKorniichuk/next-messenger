import { ConversationList } from '@/app/(private_routes)/conversations/components/ConversationList'
import { getConversations } from '@/app/actions/getConversations'
import { NavigationLayout } from '@/app/components/NavigationLayout/NavigationLayout'
import { FC, ReactNode } from 'react'

interface ConversationsLayoutProps {
  children: ReactNode
}

const ConversationsLayout: FC<ConversationsLayoutProps> = async ({
  children,
}) => {
  const conversations = await getConversations()
  return (
    <NavigationLayout
      sidebarContent={<ConversationList conversations={conversations} />}
      mainContent={children}
    />
  )
}

export default ConversationsLayout
