import { AvatarWithBadge } from '@/app/components/AvatarWithBadge/AvatarWithBadge'
import { SidebarItemPreview } from '@/app/components/SidebarItemPreview/SidebarItemPreview'
import { useConversationPartnerInfo } from '@/app/hooks/useConversationPartnerInfo'
import { FullConversationType } from '@/app/types'
import { Flex, Icon, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { FC, useCallback } from 'react'
import { MdDone, MdDoneAll } from 'react-icons/md'

interface ConversationPreviewProps {
  conversation: FullConversationType
  isActive?: boolean
}

export const ConversationPreview: FC<ConversationPreviewProps> = ({
  conversation,
  isActive,
}) => {
  const router = useRouter()

  const { user, message, messagePlaceholder, hasSeen } =
    useConversationPartnerInfo(conversation)

  const handleClick = useCallback(() => {
    router.push(`/conversations/${conversation.id}`)
  }, [router, conversation.id])

  return (
    <SidebarItemPreview isActive={isActive} onClick={handleClick}>
      <AvatarWithBadge name={user.name} image={user.image} />
      <Flex direction="column" flexBasis="100%">
        <Flex align="center" justify="space-between" gap="10px">
          <Text>{conversation.name || user.name}</Text>
          {message?.createdAt && (
            <Text fontSize="xs">
              {format(new Date(message.createdAt), 'p')}
            </Text>
          )}
        </Flex>
        <Flex align="center" justify="space-between" gap="10px">
          <Text fontSize="sm">{messagePlaceholder || message?.body}</Text>
          {!messagePlaceholder && <Icon as={hasSeen ? MdDoneAll : MdDone} />}
        </Flex>
      </Flex>
    </SidebarItemPreview>
  )
}
