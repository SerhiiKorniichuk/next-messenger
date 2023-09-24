import { Button, Icon } from '@chakra-ui/react'
import { FC } from 'react'
import { IconType } from 'react-icons'

interface SocialButtonProps {
  icon: IconType
}

export const SocialButton: FC<SocialButtonProps> = ({ icon }) => {
  return (
    <Button variant="outline">
      <Icon as={icon} width={5} height={5} />
    </Button>
  )
}
