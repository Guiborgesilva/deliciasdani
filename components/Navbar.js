import Link from 'next/link'
import styles from '../styles/components/Navbar.module.css'

export default function Navbar(){
  return(
    <header class={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img src="logo.png"/>
            </a>
          </Link>
        </div>
        <nav className={styles.desktop}>
          <ul>
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>SOBRE</a>
              </Link>
            </li>
            <li>
              <Link href="/produtos">
                <a>PRODUTOS</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>CONTATO</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.line}></div>
    </header>
  )
}