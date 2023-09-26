'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export const ChakraContext: FC<ProvidersProps> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider
        toastOptions={{
          defaultOptions: {
            status: 'success',
            position: 'top',
            isClosable: true,
          },
        }}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
