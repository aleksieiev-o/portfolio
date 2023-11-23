'use client';

import React, {FC, ReactElement} from 'react';
import {Button} from '@/components/ui/button';
import {RoutePath} from '@/router/Routes.enum';
import {useRouter} from 'next/navigation';
import {Home} from 'lucide-react';

const GoHomeButton: FC = (): ReactElement => {
  const router = useRouter();

  return (
    <Button onClick={() => router.replace(RoutePath.HOME)} variant={'outline'} className={'shadow-md'} title={'Go home'}>
      <Home className={'w-4 h-4 mr-4'}/>

      Go home
    </Button>
  );
};

export default GoHomeButton;
