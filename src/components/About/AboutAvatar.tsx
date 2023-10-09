'use client';

import React, {FC, ReactElement} from 'react';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {IFile, IPersonalInfo} from 'my-portfolio-types';

interface Props {
  file: IFile;
  personalInfo: IPersonalInfo;
}

const AboutAvatar: FC<Props> = (props): ReactElement => {
  const {file, personalInfo} = props;

  return (
    <div className={'p-2 grid grid-cols-1 content-center justify-items-center gap-4 md:gap-8'}>
      <Avatar>
        <AvatarImage src={file.fileSrc} alt={file.fileName}/>

        <AvatarFallback>OA</AvatarFallback>
      </Avatar>

      <div className={'p-2 grid grid-cols-1 content-center justify-items-center gap-4'}>
        <p className={'font-normal'}>
          Frontend developer
        </p>

        <strong className={'text-xl md:text-2xl font-bold'}>
          {personalInfo.firstName} {personalInfo.lastName}
        </strong>
      </div>
    </div>
  );
};

export default AboutAvatar;
