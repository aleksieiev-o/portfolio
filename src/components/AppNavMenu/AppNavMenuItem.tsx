'use client';

import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {Rout} from '@/router/Router';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';

const AppNavMenuItem: FC<PropsWithChildren<Rout>> = (props): ReactElement => {
  const {href, name, children} = props;
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(href)}
      variant={'ghost'}
      title={name}
      className={'w-full h-full flex rounded-none'}>
      {children}
    </Button>
  );
};

export default AppNavMenuItem;
