import { UserPreview } from '@/app/(private_routes)/users/components/UserPreview'
import { SidebarTitle } from '@/app/components/SidebarTitle/SidebarTitle'
import { Box } from '@chakra-ui/react'
import { User } from '@prisma/client'
import { FC } from 'react'

interface UserListProps {
  users: User[]
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <Box>
      <SidebarTitle>People</SidebarTitle>
      {users.map((user) => (
        <UserPreview key={user.id} user={user} />
      ))}
    </Box>
  )
}
