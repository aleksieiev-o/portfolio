import { RoutePath } from '@/router/Routes.enum';
import Link from 'next/link';
import React, {FC, ReactElement} from 'react';
import AppThemeToggle from '@/components/ui/AppThemeToggle';
import AppLocaleToggle from '@/components/ui/AppLocaleToggle';

const AppHeader: FC = (): ReactElement => {
  return (
    <header className={'w-full h-20 flex flex-row items-center justify-between overflow-hidden shadow-md'}>
      <Link href={RoutePath.HOME} className={'w-20 h-20 mr-4 flex items-center justify-center'}>
        OA
      </Link>

      <div className={'h-20 grid grid-cols-2 gap-8 items-center pr-8'}>
        <AppThemeToggle/>

        <AppLocaleToggle/>
      </div>
    </header>
  );
};

export default AppHeader;
