'use client'

import { DesktopSidebar } from '@/app/(private_routes)/(chat-room)/_components/DesktopSidebar/DesktopSidebar'
import { MobileFooter } from '@/app/(private_routes)/(chat-room)/_components/MobileFooter/MobileFooter'
import { Grid, useBreakpointValue } from '@chakra-ui/react'
import { User } from '@prisma/client'
import { FC, ReactNode } from 'react'

interface LayoutProps {
  currentUser: User
  children: ReactNode
}

export const NavigationWrapper: FC<LayoutProps> = ({
  currentUser,
  children,
}) => {
  const isMobile = useBreakpointValue({ base: true, lg: false })

  if (isMobile) {
    return (
      <Grid height="100vh" gridTemplateRows="1fr auto">
        {children}
        <MobileFooter />
      </Grid>
    )
  }

  return (
    <Grid height="100vh" gridTemplateColumns="350px 1fr">
      <DesktopSidebar currentUser={currentUser} />
      {children}
    </Grid>
  )
}
