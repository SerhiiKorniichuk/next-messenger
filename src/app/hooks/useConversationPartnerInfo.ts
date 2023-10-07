import { useConversationPartner } from '@/app/hooks/useConversationPartner'
import { FullConversationType } from '@/app/types'
import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

export const useConversationPartnerInfo = (
  conversation: FullConversationType,
) => {
  const session = useSession()

  const user = useConversationPartner(conversation)

  const message = useMemo(() => {
    const messages = conversation.messages || []
    return messages[messages.length - 1]
  }, [conversation.messages])

  const hasSeen = useMemo(() => {
    const email = session.data?.user?.email

    if (!message || !email) {
      return false
    }

    return message.seen?.find((item) => item.email === email)
  }, [session.data?.user?.email, message])

  const placeholder = useMemo(() => {
    if (message?.image) {
      return 'Sent an image'
    }
    if (!message?.body) {
      return 'No messages here yet'
    }
  }, [message?.body, message?.image])

  return {
    user,
    message,
    messagePlaceholder: placeholder,
    hasSeen,
  }
}
