'use client'

import { Loader } from '@/components/Loader/Loader'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { FC, ReactNode } from 'react'

interface PublicRoutesProps {
  children: ReactNode
}

const PublicRoutes: FC<PublicRoutesProps> = ({ children }) => {
  const session = useSession()

  if (session.status === 'loading') {
    return <Loader />
  }

  if (session.data) {
    redirect('/')
  }

  return <>{children}</>
}

export default PublicRoutes
