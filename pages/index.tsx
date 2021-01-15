import Head from 'next/head'
import styles from './index.module.scss'
import Header from '../components/Header';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.container}>
                <Header />
            </main>
        </>
    )
}
