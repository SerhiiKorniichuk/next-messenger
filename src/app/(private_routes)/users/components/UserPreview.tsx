'use client'

import { AvatarWithBadge } from '@/app/components/AvatarWithBadge/AvatarWithBadge'
import { SidebarItemPreview } from '@/app/components/SidebarItemPreview/SidebarItemPreview'
import { Text } from '@chakra-ui/react'
import { User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FC, useCallback, useState } from 'react'

interface UserPreviewProps {
  user: User
}

export const UserPreview: FC<UserPreviewProps> = ({ user }) => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(() => {
    setIsLoading(true)

    axios
      .post('/api/conversations', { userId: user.id })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`)
      })
      .finally(() => setIsLoading(false))
  }, [user, router])

  return (
    <SidebarItemPreview isLoading={isLoading} onClick={handleClick}>
      <AvatarWithBadge name={user.name} image={user.image} />
      <Text>{user.name}</Text>
    </SidebarItemPreview>
  )
}
