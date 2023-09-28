'use client'

import { NavigationButton } from '@/app/(private_routes)/(chat-room)/_components/NavigationButton/NavigationButton'
import { SignOutButton } from '@/app/(private_routes)/(chat-room)/_components/SignOutButton/SignOutButton'
import { useRoutes } from '@/app/(private_routes)/(chat-room)/_hooks/useRoutes'
import { Avatar, Box, Flex } from '@chakra-ui/react'
import { User } from '@prisma/client'
import { FC } from 'react'

interface DesktopSidebarProps {
  currentUser?: User
}

export const DesktopSidebar: FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes()

  // const [isOpen, setIsOpen] = useState(false)

  return (
    <Box borderRight="1px" borderColor="gray.100">
      <Flex
        as="nav"
        width="47px"
        height="100%"
        direction="column"
        align="center"
        borderRight="1px"
        borderColor="gray.100"
      >
        {routes.map(({ label, icon, href, active, onClick }) => (
          <NavigationButton
            key={label}
            label={label}
            icon={icon}
            href={href}
            active={active}
            onClick={onClick}
          />
        ))}
        <Flex margin="auto 0 0" direction="column" align="center" gap="3">
          <Avatar
            name={currentUser?.name || ''}
            src={currentUser?.image || ''}
            size="sm"
            bgColor="gray.400"
          />
          <SignOutButton />
        </Flex>
      </Flex>
    </Box>
  )
}
