import { RoutePath } from '@/router/Routes.enum';
import Link from 'next/link';
import React, {FC, ReactElement} from 'react';
import AppThemeChange from '@/components/ui/custom-ui/AppThemeChange';
import LogoIcon from '@/components/Logo.icon';

const AppHeader: FC = (): ReactElement => {
  return (
    <header className={'w-full h-20 flex flex-row items-center justify-between overflow-hidden border-b shadow-md pl-2 md:pl-4 pr-4 md:pr-8'}>
      <div className={'h-full'}>
        <Link href={RoutePath.HOME} className={'w-full h-full mr-4 flex items-center justify-center'}>
          <LogoIcon height={'3rem'}/>
        </Link>
      </div>

      <div className={'h-20 grid grid-flow-col auto-cols-max gap-4 md:gap-8 items-center'}>
        <AppThemeChange/>

        {/* TODO add localization */}
        {/*<AppLocaleChange/>*/}

        {/*<AppNavMenuMobile/>*/}
      </div>
    </header>
  );
};

export default AppHeader;
