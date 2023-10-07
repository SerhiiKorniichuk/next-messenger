'use client'

import { NavigationButton } from '@/app/components/NavigationButton/NavigationButton'
import { SignOutButton } from '@/app/components/SignOutButton/SignOutButton'
import { useRoutes } from '@/app/hooks/useRoutes'
import { Avatar, BoxProps, Flex } from '@chakra-ui/react'
import { User } from '@prisma/client'
import { FC } from 'react'

interface DesktopNavigationProps {
  containerProps: BoxProps
  currentUser?: User
}

export const DesktopNavigation: FC<DesktopNavigationProps> = ({
  containerProps,
  currentUser,
}) => {
  const routes = useRoutes()

  return (
    <Flex
      as="nav"
      width="70px"
      height="100%"
      direction="column"
      align="center"
      borderRight="1px"
      borderColor="gray.100"
      {...containerProps}
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
      <Flex margin="auto 0 10px" direction="column" align="center" gap="3">
        <Avatar
          name={currentUser?.name || ''}
          src={currentUser?.image || ''}
          bgColor="gray.400"
        />
        <SignOutButton />
      </Flex>
    </Flex>
  )
}
