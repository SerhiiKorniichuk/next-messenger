import { Box, Container } from '@chakra-ui/react'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

interface AuthWrapperProps {
  children: ReactNode
}

export const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxW="350px" centerContent>
        <Box mb="2rem">
          <Image src="/next.svg" alt="logo" width={60} height={60} />
        </Box>

        {children}
      </Container>
    </Box>
  )
}
