import '@/assets/styles/globals.css';
import '@/assets/styles/app-layout.module.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {FC, PropsWithChildren, ReactElement} from 'react';
import {createAppMetaData} from '@/utils/createAppMetaData';
import AppThemeProvider from '@/components/providers/AppTheme.provider';
import {AppThemeEnum} from '@/shared/types/appTheme.enum';
import AppHeader from '@/components/AppHeader';
import AppNavMenu from '@/components/AppNavMenu';
import {Toaster} from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = createAppMetaData({
  title: 'Root',
  description: 'Portfolio application',
});

const RootLayout: FC<PropsWithChildren> = ({children}): ReactElement => {
  return (
    <html lang={'en'} className={'w-full h-full'}>
      <body className={`${inter.className} w-full h-full`}>
        <AppThemeProvider
          attribute={'class'}
          defaultTheme={AppThemeEnum.SYSTEM}
          storageKey={'oa-app-theme'}
          disableTransitionOnChange
          enableSystem>
          <div className={'app-wrapper w-full h-full overflow-hidden'}>
            <div className={'app-content w-full h-full flex flex-col items-start justify-start'}>
              <AppHeader/>

              <div className={'w-full h-full flex flex-col md:flex-row items-center justify-start relative overflow-hidden'}>
                <AppNavMenu className={'flex w-full md:w-20 items-center flex-col justify-center order-last md:order-first border-t-[1px] md:border-none'}/>

                {children}
              </div>

              <Toaster/>
            </div>
          </div>
        </AppThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
