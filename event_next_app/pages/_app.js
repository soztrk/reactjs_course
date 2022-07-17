import Head from "next/head"

import '../styles/globals.css'
import Layout from "../layouts/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
      <title>Nextjs Events</title>
        <meta name="description" content="Find  a lot of events here." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="one,two,three" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
