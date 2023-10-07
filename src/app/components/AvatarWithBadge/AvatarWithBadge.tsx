import { Avatar, AvatarBadge } from '@chakra-ui/react'
import { FC } from 'react'

interface AvatarWithBadgeProps {
  name?: string | null
  image?: string | null
  hideBadge?: boolean
}

export const AvatarWithBadge: FC<AvatarWithBadgeProps> = ({
  name,
  image,
  hideBadge = false,
}) => {
  return (
    <Avatar name={name ?? ''} src={image ?? ''}>
      {!hideBadge && <AvatarBadge boxSize="1em" bg="green.500" />}
    </Avatar>
  )
}
