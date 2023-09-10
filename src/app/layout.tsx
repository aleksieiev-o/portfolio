import '../assets/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {FC, PropsWithChildren, ReactElement} from 'react';
import {createAppMetaData} from '@/utils/createAppMetaData';

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
        <div className={'app-wrapper'}>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
