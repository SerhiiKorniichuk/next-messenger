import { Text } from '@chakra-ui/react'
import { FC } from 'react'

interface SidebarTitleProps {
  children: string
}

export const SidebarTitle: FC<SidebarTitleProps> = ({ children }) => {
  return (
    <Text
      padding={4}
      fontSize="2xl"
      fontWeight="bold"
      color="gray.700"
      borderBottom="1px"
      borderColor="gray.100"
    >
      {children}
    </Text>
  )
}
