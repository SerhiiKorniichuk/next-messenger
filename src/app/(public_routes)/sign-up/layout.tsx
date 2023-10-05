import { AuthWrapper } from '@/app/components/AuthWrapper/AuthWrapper'
import { FC, ReactNode } from 'react'

interface SignUpProps {
  children: ReactNode
}

const SignUp: FC<SignUpProps> = ({ children }) => {
  return <AuthWrapper>{children}</AuthWrapper>
}

export default SignUp
