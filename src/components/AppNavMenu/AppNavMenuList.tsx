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
    <ul className={'w-full flex flex-row md:flex-col overflow-hidden'}>
      {
        appNavMenuList.map((rout, idx, arr) => (
          <li className={'w-full md:w-20 h-16 md:h-20 flex flex-row md:flex-col'} key={rout.href}>
            <AppNavMenuItem
              href={rout.href}
              name={rout.name}>
              {rout.IconComponent}
            </AppNavMenuItem>

            {
              idx !== arr.length - 1 && <Separator className={'hidden md:block'}/>
            }

            {
              idx !== arr.length - 1 && <Separator orientation={'vertical'} className={'block md:hidden'}/>
            }
          </li>
        ))
      }
    </ul>
  );
};

export default NavMenuList;
