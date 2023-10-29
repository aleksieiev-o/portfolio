'use client';

import React, {FC, ReactElement} from 'react';
import {Button} from '@/components/ui/button';
import {RoutePath} from '@/router/Routes.enum';
import {useRouter} from 'next/navigation';

const GoHomeButton: FC = (): ReactElement => {
  const router = useRouter();

  return (
    <Button onClick={() => router.replace(RoutePath.HOME)} variant={'ghost'}>
      Go home
    </Button>
  );
};

export default GoHomeButton;
