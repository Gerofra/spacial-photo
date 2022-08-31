import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import DatePicker from './components/datepicker'
import styles from '../styles/Home.module.css'
import Loader from './components/loader.js'
import Emoji from './components/emoji.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Spacial Photo</title>
        <meta name="description" content="by Gerónimo Pericoli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Choose your <span className={styles.spacial}>spacial</span> date<Emoji symbol="🌌" label="milky way"/>
        </h2>
        <DatePicker></DatePicker>
        <Loader></Loader>

        <div id="photoBox" className={styles.photoCard}>
          <img id="photoBoxImg" className={styles.photoCardImg} src=""></img>
          <div className={styles.photoDesc}>
            <p id="photoBoxDate" className={styles.photoCardDate}></p>
            <p id="photoBoxTitle" className={styles.photoCardTitle}></p>
          </div>
        </div>

        <code className={styles.code}>
          We are using NASA Astronomy Picture of the Day API. For each calendar day there is a different image or photograph of our fascinating universe, along with a brief explanation written by a professional astronomer.
          <a href="https://apod.nasa.gov/apod/" rel="noreferrer" target="_blank">(Click here to read more)</a>
        </code>

      </main>

      <footer className={styles.footer}>

        <code className={styles.code}><Link href="/contact">Gerónimo Pericoli</Link></code>

      </footer>
    </div>
  )
}
