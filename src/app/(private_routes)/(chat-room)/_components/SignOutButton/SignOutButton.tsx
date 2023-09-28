import { NavigationButton } from '@/app/(private_routes)/(chat-room)/_components/NavigationButton/NavigationButton'
import { signOut } from 'next-auth/react'
import { FC } from 'react'
import { IoLogOut } from 'react-icons/io5'

interface SignOutButtonProps {
  className?: string
}

export const SignOutButton: FC<SignOutButtonProps> = ({ className }) => {
  return (
    <NavigationButton
      className={className}
      label="Sign Out"
      icon={IoLogOut}
      onClick={() => signOut()}
    />
  )
}
