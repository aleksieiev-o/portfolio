'use client';

import React, {FC, ReactElement} from 'react';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {IFile, IPersonalInfo, ISocial} from 'my-portfolio-types';
import AppSocialsList from '@/components/AppSocialsList';

interface Props {
  file: IFile;
  personalInfo: IPersonalInfo;
  socials: Array<ISocial>;
}

const AboutAvatar: FC<Props> = (props): ReactElement => {
  const {file, personalInfo, socials} = props;

  return (
    <div className={'p-2 grid grid-cols-1 content-center justify-items-center gap-4 xl:gap-6'}>
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

      <AppSocialsList socials={socials}/>
    </div>
  );
};

export default AboutAvatar;
