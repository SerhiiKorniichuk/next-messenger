'use client'

import { Loader } from '@/app/components/Loader/Loader'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { FC, ReactNode } from 'react'

interface PrivateRoutesProps {
  children: ReactNode
}

const PrivateRoutes: FC<PrivateRoutesProps> = ({ children }) => {
  const session = useSession()

  if (session.status === 'loading') {
    return <Loader />
  }

  if (!session.data) {
    redirect('/sign-in')
  }

  return <>{children}</>
}

export default PrivateRoutes
