import styles from '../styles/components/Footer.module.css'

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContentLeft}>
          <p>Você pode nos encontrar no endereço:</p>
          <p>Criciúma - SC, R. Cecílio Zakrzeski, Nº 334</p>
        </div>
        <div className={styles.footerContentCenter}>
          <h2>Delícias da Dani</h2>
        </div>
        <div className={styles.footerContentRight}>
          <p>Faça um orçamento!</p>
          <p><img src="/icons/whatsapp.svg" />(48) 99692-2604</p>
        </div>
      </div>
    </footer>
  )
}