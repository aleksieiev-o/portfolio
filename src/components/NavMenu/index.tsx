import React, {FC, ReactElement} from 'react';
import NavMenuList from '@/components/NavMenu/NavMenuList';

const NavMenu: FC = (): ReactElement => {
  return (
    <nav className={'md:flex w-20 items-center flex-col justify-center'}>
      <NavMenuList/>
    </nav>
  );
};

export default NavMenu;
