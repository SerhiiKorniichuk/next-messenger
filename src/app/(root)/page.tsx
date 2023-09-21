import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src="/next.svg" alt="logo" width={48} height={48} />
    </main>
  )
}
