import styles from '../../styles/components/ProdutosDestaque.module.css'

export default function ProduDesta(){
  return(
    <section className={styles.produDesta}>
      <h2>Confira abaixo alguns produtos em destque!</h2>
      <section className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.img}>
            <img src="caixa-doces.png" />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Caixa de doces sortidos</h2>
            <ul>
              <li>Brigadeiro</li>
              <li>Casadinho</li>
              <li>Cajuzinho</li>
            </ul>
            <div className={styles.cardCallWrapper}>
              <button className={styles.cardCall}>
                <img id={styles.whatsIconN} src="/icons/whatsapp.svg" />
                <img id={styles.whatsIconH} src="/icons/whatsapp-hover.svg" />
                QUERO ENCOMENDAR
              </button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.img}>
            <img src="caixa-doces.png" />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Caixa de doces sortidos</h2>
            <ul>
              <li>Brigadeiro</li>
              <li>Casadinho</li>
              <li>Cajuzinho</li>
            </ul>
            <div className={styles.cardCallWrapper}>
              <button className={styles.cardCall}>
                <img id={styles.whatsIconN} src="/icons/whatsapp.svg" />
                <img id={styles.whatsIconH} src="/icons/whatsapp-hover.svg" />
                QUERO ENCOMENDAR
              </button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.img}>
            <img src="caixa-doces.png" />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Caixa de doces sortidos</h2>
            <ul>
              <li>Brigadeiro</li>
              <li>Casadinho</li>
              <li>Cajuzinho</li>
            </ul>
            <div className={styles.cardCallWrapper}>
              <button className={styles.cardCall}>
                <img id={styles.whatsIconN} src="/icons/whatsapp.svg" />
                <img id={styles.whatsIconH} src="/icons/whatsapp-hover.svg" />
                QUERO ENCOMENDAR
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}