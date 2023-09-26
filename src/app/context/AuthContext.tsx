'use client'

import { SessionProvider } from 'next-auth/react'
import { FC, ReactNode } from 'react'

interface AuthContextProps {
  children: ReactNode
}

export const AuthContext: FC<AuthContextProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}
