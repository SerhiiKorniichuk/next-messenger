import { AuthContext } from '@/app/context/AuthContext'
import { ChakraContext } from '@/app/context/ChakraContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Messenger',
  description: 'Messenger for personal use',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <ChakraContext>
          <AuthContext>{children}</AuthContext>
        </ChakraContext>
      </body>
    </html>
  )
}
