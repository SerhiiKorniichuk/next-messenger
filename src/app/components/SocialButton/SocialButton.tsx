import { Button, ButtonProps, Icon } from '@chakra-ui/react'
import { FC } from 'react'
import { IconType } from 'react-icons'

interface SocialButtonProps extends Omit<ButtonProps, 'children'> {
  icon: IconType
}

export const SocialButton: FC<SocialButtonProps> = ({ icon, ...props }) => {
  return (
    <Button {...props} variant="outline">
      <Icon as={icon} width={5} height={5} />
    </Button>
  )
}
