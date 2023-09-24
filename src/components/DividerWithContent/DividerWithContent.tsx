import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface DividerWithContentProps {
  children: ReactNode
}

export const DividerWithContent: FC<DividerWithContentProps> = ({
  children,
}) => {
  return (
    <Box position="relative" my="10" width="full">
      <Divider />
      <AbsoluteCenter
        bg="white"
        px="2"
        width="fit-content"
        fontSize="xs"
        color="gray.400"
        userSelect="none"
      >
        {children}
      </AbsoluteCenter>
    </Box>
  )
}
