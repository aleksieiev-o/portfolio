import { RoutePath } from '@/router/Routes.enum';
import Link from 'next/link';
import React, {FC, ReactElement} from 'react';
import AppThemeChange from '@/components/ui/custom-ui/AppThemeChange';
import AppLocaleChange from '@/components/ui/custom-ui/AppLocaleChange';

const AppHeader: FC = (): ReactElement => {
  return (
    <header className={'w-full h-20 flex flex-row items-center justify-between overflow-hidden shadow-md'}>
      <Link href={RoutePath.HOME} className={'w-12 md:w-20 h-12 md:h-20 mr-4 flex items-center justify-center'}>
        OA
      </Link>

      <div className={'h-20 grid grid-flow-col auto-cols-max gap-4 md:gap-8 items-center pr-4 md:pr-8'}>
        <AppThemeChange/>

        <AppLocaleChange/>

        {/*<AppNavMenuMobile/>*/}
      </div>
    </header>
  );
};

export default AppHeader;
