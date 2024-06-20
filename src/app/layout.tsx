import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@/theme/ThemeProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './index.css';

export const metadata: Metadata = {
  title: 'GitPulse',
  description: 'GitPulse is a web application that allows you to explore your GitHub profile, monitor repository activity, and stay updated with the latest changes in your projects.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
  },
  // TODO: Add Open Graph metadata
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/github.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" /> */}
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;