'use client';

import React, {FC, ReactElement} from 'react';
import {IPersonalInfo, ISocial} from 'my-portfolio-types';
import {Mail, MapPin} from 'lucide-react';
import AppSocialsList from '@/components/AppSocialsList';

interface Props {
  personalInfo: IPersonalInfo;
  socials: Array<ISocial>;
}

const ContactsInfo: FC<Props> = (props): ReactElement => {
  const {personalInfo, socials} = props;

  return (
    <div className={'grid grid-cols-1 content-start justify-items-start gap-4 md:gap-8 w-full'}>
      <h4 className={'font-bold text-xl'}>
        What’s your story? Get in touch
      </h4>

      <div className={'grid grid-cols-1 gap-2 w-full'}>
        <p className={'text-lg'}>
          Always available for freelancing if the right project comes along.
        </p>

        <p className={'text-lg'}>
          Feel free to contact me
        </p>
      </div>

      <div className={'grid grid-cols-1 gap-4 md:gap-8'}>
        <div className={'flex items-start justify-start flex-nowrap gap-4'}>
          <MapPin/>

          <span>{personalInfo.country}, {personalInfo.town}</span>
        </div>

        <div className={'flex items-start justify-start flex-nowrap gap-4'}>
          <Mail/>

          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        </div>
      </div>

      <AppSocialsList socials={socials}/>
    </div>
  );
};

export default ContactsInfo;
