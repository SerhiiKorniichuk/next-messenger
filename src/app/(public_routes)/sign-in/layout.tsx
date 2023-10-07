import { AuthWrapper } from '@/app/components/AuthWrapper/AuthWrapper'
import { FC, ReactNode } from 'react'

interface SignInProps {
  children: ReactNode
}

const SignIn: FC<SignInProps> = ({ children }) => {
  return <AuthWrapper>{children}</AuthWrapper>
}

export default SignIn
