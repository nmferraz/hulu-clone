import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Amazind«g Hulu clone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
    </div>
  )
}
