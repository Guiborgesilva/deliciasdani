import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ProduDesta from '../components/ProdutosDestaque'
import Sobre from '../components/Sobre'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Head>
      <title>Delícias da Dani | Home</title>
    </Head>
    <Navbar />
    <Banner />
    <ProduDesta />
    <Sobre />
    <Footer />
    </>
  )
}