import type { Metadata } from 'next';
import {FC, PropsWithChildren, ReactElement} from 'react';
import {createAppMetaData} from '@/utils/createAppMetaData';

export const metadata: Metadata = createAppMetaData({
  title: 'Home',
  description: 'Portfolio application',
});

const HomeLayout: FC<PropsWithChildren> = ({children}): ReactElement => {
  return (
    <section className={'layout-wrapper'}>
      {children}
    </section>
  );
};

export default HomeLayout;
