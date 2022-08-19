import Head from 'next/head';
import Layout from '../components/Layout';
import Home from '../components/Home';

export default function index() {
    return (
        <div>
            <Head>
                <title>studyoda</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
            </Head>
            <Layout>
                <Home />
            </Layout>
        </div>
    );
}
