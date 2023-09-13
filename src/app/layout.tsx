import '../assets/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {FC, PropsWithChildren, ReactElement} from 'react';
import {createAppMetaData} from '@/utils/createAppMetaData';
import AppThemeProvider from '@/components/providers/AppTheme.provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = createAppMetaData({
  title: 'Root',
  description: 'Portfolio application',
});

const RootLayout: FC<PropsWithChildren> = ({children}): ReactElement => {
  return (
    <html lang={'en'}>
      {/* TODO add app theme toggle 'theme-light' or 'theme-dark' mode */}
      <body className={inter.className}>
        <AppThemeProvider
          attribute={'class'}
          defaultTheme={'system'}
          disableTransitionOnChange={true}
          enableSystem={true}>
          <div className={'app-wrapper'}>
            {children}
          </div>
        </AppThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
