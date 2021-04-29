import styles from '../styles/components/Banner.module.css'
import Link from 'next/link'

export default function Banner(){
  return(
    <section className={styles.banner}>
      <img src="banner.png" />
      <div className={styles.chamadaBanner}>
        <h2>
          Pensando em <span>presentear</span> alguém <span>muito especial?</span>
        </h2>
        <Link href="/produtos">
          <button className={styles.buttonChamada}>CONFIRA NOSSOS PRODUTOS</button>
        </Link>
      </div>
    </section>
  )
}