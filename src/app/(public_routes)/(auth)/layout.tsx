import { Box, Container } from '@chakra-ui/react'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

interface AuthProps {
  children: ReactNode
}

const Auth: FC<AuthProps> = ({ children }) => {
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

export default Auth
