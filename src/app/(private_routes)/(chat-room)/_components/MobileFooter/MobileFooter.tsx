'use client'

import { NavigationButton } from '@/app/(private_routes)/(chat-room)/_components/NavigationButton/NavigationButton'
import { SignOutButton } from '@/app/(private_routes)/(chat-room)/_components/SignOutButton/SignOutButton'
import { useConversation } from '@/app/(private_routes)/(chat-room)/_hooks/useConversation'
import { useRoutes } from '@/app/(private_routes)/(chat-room)/_hooks/useRoutes'
import { Flex } from '@chakra-ui/react'

export const MobileFooter = () => {
  const routes = useRoutes()
  const { isOpen } = useConversation()

  if (isOpen) {
    return null
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      borderTop="1px"
      borderColor="gray.100"
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
