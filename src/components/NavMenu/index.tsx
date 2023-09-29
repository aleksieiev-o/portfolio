import React, {FC, ReactElement} from 'react';
import NavMenuList from '@/components/NavMenu/NavMenuList';

interface Props {
  className: string;
}

const NavMenu: FC<Props> = (props): ReactElement => {
  const {className} = props;

  return (
    <nav className={className}>
      <NavMenuList/>
    </nav>
  );
};

export default NavMenu;
