'use client';

import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {AppThemeEnum} from '@/shared/types/appTheme.enum';
import AppThemeProvider from '@/components/providers/AppTheme.provider';
import AppPageInitProvider from '@/components/providers/AppPageInitProvider';

const AppProviders: FC<PropsWithChildren> = ({children}): ReactElement => {
  return (
    <AppThemeProvider
      attribute={'class'}
      defaultTheme={AppThemeEnum.SYSTEM}
      storageKey={'oa-app-theme'}
      disableTransitionOnChange
      enableSystem>
      <AppPageInitProvider>
        {children}
      </AppPageInitProvider>
    </AppThemeProvider>
  );
};

export default AppProviders;
