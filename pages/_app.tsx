import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Import the Layout Component 
import Layout from "../components/Layout"
import Modal from '../components/Modal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Modal actionLabel='ubmit' isOpen title=" Modal"/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
