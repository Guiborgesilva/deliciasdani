import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/pages/Produtos.module.css'

export default function Produtos(){
  return(
    <>
    <Head>
      <title>Delícias da Dani | Produtos</title>
    </Head>
    <Navbar />
    <section className={styles.chamadaProd}>
      <div className={styles.container}>
        <h2>PRODUTOS</h2>
      </div>
    </section>
    </>
  )
}