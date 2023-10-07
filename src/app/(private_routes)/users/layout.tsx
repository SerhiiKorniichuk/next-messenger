import { UserList } from '@/app/(private_routes)/users/components/UserList'
import { getUsers } from '@/app/actions/getUsers'
import { NavigationLayout } from '@/app/components/NavigationLayout/NavigationLayout'
import { FC, ReactNode } from 'react'

interface UsersLayoutProps {
  children: ReactNode
}

const UsersLayout: FC<UsersLayoutProps> = async ({ children }) => {
  const users = await getUsers()

  return (
    <NavigationLayout
      sidebarContent={<UserList users={users!} />}
      mainContent={children}
    />
  )
}

export default UsersLayout
