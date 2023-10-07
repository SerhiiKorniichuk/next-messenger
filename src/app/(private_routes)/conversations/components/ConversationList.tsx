'use client'

import { ConversationPreview } from '@/app/(private_routes)/conversations/components/ConversationPreview'
import { SidebarTitle } from '@/app/components/SidebarTitle/SidebarTitle'
import { useConversation } from '@/app/hooks/useConversation'
import { FullConversationType } from '@/app/types'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'

interface ConversationListProps {
  conversations: FullConversationType[]
}

export const ConversationList: FC<ConversationListProps> = ({
  conversations,
}) => {
  const { conversationId } = useConversation()

  return (
    <Box>
      <SidebarTitle>Conversations</SidebarTitle>
      {conversations.map((conversation) => (
        <ConversationPreview
          key={conversation.id}
          conversation={conversation}
          isActive={conversationId === conversation.id}
        />
      ))}
    </Box>
  )
}
