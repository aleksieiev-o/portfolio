import type { Metadata } from 'next';
import {FC, PropsWithChildren, ReactElement} from 'react';
import {createAppMetaData} from '@/utils/createAppMetaData';
import AppContentWrapper from '@/components/AppContentWrapper';

export const metadata: Metadata = createAppMetaData({
  title: 'Skills',
  description: 'Portfolio application',
});

const SkillsLayout: FC<PropsWithChildren> = ({children}): ReactElement => {
  return (
    <section className={'w-full h-full overflow-hidden'}>
      <AppContentWrapper>
        {children}
      </AppContentWrapper>
    </section>
  );
};

export default SkillsLayout;
