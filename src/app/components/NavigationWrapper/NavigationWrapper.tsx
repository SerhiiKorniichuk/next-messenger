import { getCurrentUser } from '@/app/actions/getCurrentUser'
import { DesktopNavigation } from '@/app/components/NavigationWrapper/DesktopNavigation'
import { MobileNavigation } from '@/app/components/NavigationWrapper/MobileNavigation'
import { Box, Flex } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const NavigationWrapper: FC<LayoutProps> = async ({ children }) => {
  const currentUser = await getCurrentUser()

  return (
    <Box height="100vh" position="relative">
      <MobileNavigation
        containerProps={{
          display: { base: 'flex', lg: 'none' },
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      <DesktopNavigation
        containerProps={{
          display: { base: 'none', lg: 'flex' },
          position: 'absolute',
          left: 0,
          top: 0,
        }}
        currentUser={currentUser!}
      />
      <Flex
        as="main"
        height="100%"
        padding={{ base: '0 0 56px', lg: '0 0 0 70px' }}
      >
        {children}
      </Flex>
    </Box>
  )
}
