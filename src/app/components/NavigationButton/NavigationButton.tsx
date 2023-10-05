import { RouteOptions } from '@/app/hooks/useRoutes'
import { Box, Icon } from '@chakra-ui/react'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { FC, MouseEventHandler } from 'react'
import styles from './navigationButton.module.scss'

interface NavigationButtonProps extends RouteOptions {
  className?: string
}

export const NavigationButton: FC<NavigationButtonProps> = ({
  className,
  href,
  icon,
  active,
  onClick,
}) => {
  const router = useRouter()

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    if (onClick) {
      onClick()
    } else if (href) {
      router.push(href)
    }
  }

  return (
    <Box
      className={clsx(
        styles.container,
        { [styles.active]: Boolean(active) },
        className,
      )}
      onClick={handleClick}
    >
      <Icon as={icon} width={8} height={8} />
    </Box>
  )
}
