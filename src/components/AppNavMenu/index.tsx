import React, {FC, ReactElement} from 'react';
import NavMenuList from '@/components/AppNavMenu/AppNavMenuList';

interface Props {
  className: string;
}

const AppNavMenu: FC<Props> = (props): ReactElement => {
  const {className} = props;

  return (
    <nav className={className}>
      <NavMenuList/>
    </nav>
  );
};

export default AppNavMenu;
