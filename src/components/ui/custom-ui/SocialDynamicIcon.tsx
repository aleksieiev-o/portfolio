import React, {FC, ReactElement, Suspense} from 'react';
import dynamic from 'next/dynamic';
import {Skeleton} from '@/components/ui/skeleton';

interface Props {
  iconName: string;
}

const SocialDynamicIcon: FC<Props> = (props): ReactElement => {
  const {iconName} = props;

  const Icon = dynamic(() => import('react-icons/fa6')
    .then((module) => module[iconName]),
    {loading: () => <Skeleton className={'h-3.5 w-3.5 rounded-full'}/>});

  return (
    <Suspense fallback={<Skeleton className={'h-3.5 w-3.5 rounded-full'}/>}>
      <Icon/>
    </Suspense>
  );
};

export default SocialDynamicIcon;
