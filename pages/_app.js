import '../styles/globals.css'
import { HelmetProvider } from 'react-helmet-async'

export default function App({ Component, pageProps }) {
  return (
    <HelmetProvider>
      <Component {...pageProps} />
    </HelmetProvider>
  )
}

