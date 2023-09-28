import { NavigationWrapper } from '@/app/(private_routes)/(chat-room)/_components/NavigationWrapper/NavigationWrapper'
import { getCurrentUser } from '@/app/actions/getCurrentUser'
import { Box } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface ChatRoomLayoutProps {
  children: ReactNode
}

const ChatRoomLayout: FC<ChatRoomLayoutProps> = async ({ children }) => {
  const currentUser = await getCurrentUser()

  return (
    <NavigationWrapper currentUser={currentUser!}>
      <Box as="main" height="100%">
        {children}
      </Box>
    </NavigationWrapper>
  )
}

export default ChatRoomLayout
