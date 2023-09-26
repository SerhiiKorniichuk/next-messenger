'use client'

import { Box, Button } from '@chakra-ui/react'
import { signOut } from 'next-auth/react'

const Home = () => {
  return (
    <Box>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </Box>
  )
}

export default Home
