'use client';

import React, {FC, ReactElement} from 'react';
import {IDocument, IPersonalInfo} from 'my-portfolio-types';
import AppDocumentRequest from '@/components/ui/custom-ui/AppDocumentRequest';

interface Props {
  personalInfo: IPersonalInfo;
  documents: Array<IDocument>;
}

const HomeInfo: FC<Props> = (props): ReactElement => {
  const {personalInfo, documents} = props;

  return (
    <div className={'grid grid-cols-1 content-center justify-items-start gap-4 md:gap-6 xl:gap-10'}>
      <div className={'grid grid-cols-1 content-center justify-items-start gap-4'}>
        <p className={'text-xl sm:text-2xl'}>Hello, my name is</p>

        <h2 className={'text-2xl sm:text-4xl'}>
          {`${personalInfo.firstName} ${personalInfo.lastName}`}
        </h2>
      </div>

      <p className={'text-4xl sm:text-6xl font-bold'}>Frontend developer</p>

      <div className={'grid grid-cols-1 content-center justify-items-start gap-8 xl:gap-16'}>
        <p className={'text-xl sm:text-2xl'}>
          {personalInfo.aboutMe}
        </p>

        <div className={'grid grid-cols-1 content-center justify-items-start gap-3 xl:gap-6'}>
          <p className={'text-lg sm:text-xl'}>Here is a list of documents you can request</p>

          <AppDocumentRequest documents={documents}/>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
