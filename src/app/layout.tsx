import { FunctionComponent, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { ThemeProvider } from '@/theme/ThemeProvider';
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

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Adding the favicon link */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/github.ico" />
      </head>
      <body >
        {/* <AppStoreProvider> */}
          <ThemeProvider>
            {/* <CurrentLayout> */}
              {children}
              {/* </CurrentLayout> */}
          </ThemeProvider>
        {/* </AppStoreProvider> */}
      </body>
    </html>
  );
};

export default RootLayout;
