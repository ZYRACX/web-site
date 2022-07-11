import type { AppProps } from 'next/app'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/flex-slider.css"
import "../styles/fontawesome.css"
import "../styles/tooplate-main.css"
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return <SessionProvider session={pageProps.session}> <Component {...pageProps} /> </SessionProvider>
}

export default MyApp
