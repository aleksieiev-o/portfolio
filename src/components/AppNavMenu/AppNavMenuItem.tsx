import React, {FC, PropsWithChildren, ReactElement} from 'react';
import Link from 'next/link';
import {Rout} from '@/router/Router';
import {Button} from '@/components/ui/button';

const AppNavMenuItem: FC<PropsWithChildren<Rout>> = (props): ReactElement => {
  const {href, name, children} = props;

  return (
    <Button variant={'ghost'} className={'w-full h-full flex'}>
      <Link
        href={href}
        title={name}
        className={'w-full h-full flex items-center justify-center'}>
        {children}
      </Link>
    </Button>
  );
};

export default AppNavMenuItem;
