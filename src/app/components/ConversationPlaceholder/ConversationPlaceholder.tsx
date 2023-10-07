import { Box } from '@chakra-ui/react'

const ConversationPlaceholder = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgColor="gray.50"
    >
      Select a chat or start a new conversation
    </Box>
  )
}

export default ConversationPlaceholder
