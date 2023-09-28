import { Box } from '@chakra-ui/react'
import styles from './loader.module.scss'

export const Loader = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box className={styles.loader} />
    </Box>
  )
}
