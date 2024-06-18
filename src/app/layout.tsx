import { FunctionComponent, PropsWithChildren } from 'react'
import { Metadata } from 'next'
import { ThemeProvider } from '@/theme/ThemeProvider'
import './index.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'GitPulse',
  description: 'GitPulse is a web application that allows you to explore your GitHub profile, monitor repository activity, and stay updated with the latest changes in your projects.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
  },
  // TODO: Add Open Graph metadata
}

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        {/* Adding the favicon link */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/github.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Dynalight&display=swap" rel="stylesheet" /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"/> */}
          </Head>
          <body className='font-manrope' >
            {/* <AppStoreProvider> */}
            <ThemeProvider>
              {/* <CurrentLayout> */}
              <Navbar />
              {children}
              {/* </CurrentLayout> */}
            </ThemeProvider>
            {/* </AppStoreProvider> */}
          </body>
        </html>
        )
}

export default RootLayout