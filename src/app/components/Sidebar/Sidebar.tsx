import { Flex } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface SidebarProps {
  children: ReactNode
}

export const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Flex
      width="100%"
      maxWidth="350px"
      direction="column"
      borderRight="1px"
      borderColor="gray.100"
    >
      {children}
    </Flex>
  )
}
