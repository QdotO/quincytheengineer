import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Quincy The Engineer</title>
                <meta
                    name='description'
                    content='Quincy The Engineer Personal Site'
                />
            </Head>

            <main className={styles.main}>
                <Banner />
            </main>

            <footer className={styles.footer}>Copyright 2022</footer>
        </div>
    )
}
