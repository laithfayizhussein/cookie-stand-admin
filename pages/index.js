
import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>

            <Head>
                <title>Cookie Stand Admin</title>
            </Head>

            <Header />

            <Main />

            <Footer />

        </div>
    )
}

export default Home;