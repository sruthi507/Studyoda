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
            </Head>
            <Layout>
                <Home />
            </Layout>
        </div>
    );
}