'use client'

import { Box, Container } from '@chakra-ui/react'
import Image from 'next/image'
import { FC, ReactNode } from 'react'
import styles from './auth.module.scss'

interface AuthProps {
  children: ReactNode
}

const Auth: FC<AuthProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <Container maxW="350px" centerContent>
        <Box mb="2rem">
          <Image src="/next.svg" alt="logo" width={60} height={60} />
        </Box>

        {children}
      </Container>
    </div>
  )
}

export default Auth
