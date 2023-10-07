'use client'

import { NavigationButton } from '@/app/components/NavigationButton/NavigationButton'
import { SignOutButton } from '@/app/components/SignOutButton/SignOutButton'
import { useConversation } from '@/app/hooks/useConversation'
import { useRoutes } from '@/app/hooks/useRoutes'
import { BoxProps, Flex } from '@chakra-ui/react'
import { FC } from 'react'

interface MobileNavigationProps {
  containerProps: BoxProps
}

export const MobileNavigation: FC<MobileNavigationProps> = ({
  containerProps,
}) => {
  const routes = useRoutes()
  const { isOpen } = useConversation()

  if (isOpen) {
    return null
  }

  return (
    <Flex
      as="nav"
      width="100%"
      height="56px"
      align="center"
      justify="space-between"
      borderTop="1px"
      borderColor="gray.100"
      {...containerProps}
    >
      <SignOutButton />

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
    </Flex>
  )
}
