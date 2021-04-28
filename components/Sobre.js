import styles from '../styles/components/Sobre.module.css'

export default function Sobre(){
  return(
    <section className={styles.sobre}>
      <div className={styles.sobreWrapper}>
        <div className={styles.sobreContent}>
          <h2>Um pouco sobre a Dani</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur faucibus imperdiet. Vivamus eget hendrerit eros, nec porttitor turpis. Quisque porta dictum diam nec tincidunt. Suspendisse potenti. Cras ut neque id enim scelerisque ultricies.
          </p>
          <button className={styles.sobreCTA}>SAIBA MAIS</button>
        </div>
        <div className={styles.cupcake}>
          <img src="cupcake.png" />
        </div>
      </div>
    </section>
  )
}