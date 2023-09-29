import React, {FC, ReactElement} from 'react';
import {Rout, router} from '@/router/Router';
import AppNavMenuItem from '@/components/AppNavMenu/AppNavMenuItem';
import {Contact, GalleryThumbnails, Home, Star, User} from 'lucide-react';
import {Separator} from '@/components/ui/separator';

interface INavMenuItem extends Rout {
  IconComponent: ReactElement;
}

const navMenuListIcons: Array<{icon: ReactElement}> = [
  {icon: <Home />},
  {icon: <User />},
  {icon: <GalleryThumbnails />},
  {icon: <Star />},
  {icon: <Contact />},
];

const appNavMenuList: Array<INavMenuItem> = router.map((rout, idx): INavMenuItem => {
  return {...rout, IconComponent: navMenuListIcons[idx].icon};
});

const NavMenuList: FC = (): ReactElement => {
  return (
    <ul className={'w-full overflow-hidden'}>
      {
        appNavMenuList.map((rout, idx, arr) => (
          <li className={'w-20 h-20 flex flex-col'} key={rout.href}>
            <AppNavMenuItem
              href={rout.href}
              name={rout.name}>
              {rout.IconComponent}
            </AppNavMenuItem>

            {
              idx !== arr.length - 1 && <Separator/>
            }
          </li>
        ))
      }
    </ul>
  );
};

export default NavMenuList;
