import '@/assets/styles/globals.css';
import '@/assets/styles/app-layout.module.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {FC, PropsWithChildren, ReactElement} from 'react';
import {createAppMetaData} from '@/utils/createAppMetaData';
import AppWrapper from '@/components/AppWrapper';
import AppProviders from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = createAppMetaData({
  title: 'Root',
  description: 'Portfolio application',
});

const RootLayout: FC<PropsWithChildren> = ({children}): ReactElement => {
  return (
    <html lang={'en'} className={'w-full h-full'}>
      <body className={`${inter.className} w-full h-full`}>
        <AppProviders>
          <AppWrapper>
            {children}
          </AppWrapper>
        </AppProviders>
      </body>
    </html>
  );
};

export default RootLayout;
