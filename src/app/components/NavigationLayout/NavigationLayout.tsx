import { NavigationWrapper } from '@/app/components/NavigationWrapper/NavigationWrapper'
import { Sidebar } from '@/app/components/Sidebar/Sidebar'
import { FC, ReactNode } from 'react'

interface NavigationLayoutProps {
  sidebarContent: ReactNode
  mainContent: ReactNode
}

export const NavigationLayout: FC<NavigationLayoutProps> = ({
  sidebarContent,
  mainContent,
}) => {
  return (
    <NavigationWrapper>
      <Sidebar>{sidebarContent}</Sidebar>
      {mainContent}
    </NavigationWrapper>
  )
}
