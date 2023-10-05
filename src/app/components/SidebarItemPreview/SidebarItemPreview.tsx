import { Flex } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface SidebarItemPreviewProps {
  isActive?: boolean
  isLoading?: boolean
  onClick?: () => void
  children: ReactNode
}

export const SidebarItemPreview: FC<SidebarItemPreviewProps> = ({
  children,
  isActive,
  isLoading,
  onClick,
}) => {
  return (
    <Flex
      align="center"
      paddingX={4}
      paddingY={2}
      gap={3}
      borderBottom="1px"
      borderColor="gray.100"
      bgColor={isActive ? 'gray.100' : 'white'}
      _hover={{
        backgroundColor: 'gray.50',
      }}
      cursor={isLoading || isActive ? 'default' : 'pointer'}
      pointerEvents={isLoading || isActive ? 'none' : 'auto'}
      onClick={onClick}
    >
      {children}
    </Flex>
  )
}
