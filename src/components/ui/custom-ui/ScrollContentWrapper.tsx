import React, {FC, PropsWithChildren, ReactElement} from 'react';

const ScrollContentWrapper: FC<PropsWithChildren> = ({children}): ReactElement => {
  return (
    <div className={'w-full h-full overflow-x-hidden overflow-y-auto'}>
      <div className={'container mx-auto'}>
        {children}
      </div>
    </div>
  );
};

export default ScrollContentWrapper;
