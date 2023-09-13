import '@/assets/styles/globals.css';
import '@/assets/styles/app-layout.module.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {FC, PropsWithChildren, ReactElement} from 'react';
import {createAppMetaData} from '@/utils/createAppMetaData';
import AppThemeProvider from '@/components/providers/AppTheme.provider';
import {AppThemeEnum} from '@/shared/types/appTheme.enum';
import AppHeader from '@/components/AppHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = createAppMetaData({
  title: 'Root',
  description: 'Portfolio application',
});

const RootLayout: FC<PropsWithChildren> = ({children}): ReactElement => {
  return (
    <html lang={'en'} className={'w-full h-full'}>
      {/* TODO add app theme toggle 'theme-light' or 'theme-dark' mode */}
      <body className={`${inter.className} w-full h-full`}>
        <AppThemeProvider
          attribute={'class'}
          defaultTheme={AppThemeEnum.SYSTEM}
          storageKey={'oa-app-theme'}
          disableTransitionOnChange
          enableSystem>
          <div className={'app-wrapper w-full h-full relative overflow-hidden'}>
            <div className={'app-content w-full h-full relative'}>
              <AppHeader/>

              {children}
            </div>
          </div>
        </AppThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
