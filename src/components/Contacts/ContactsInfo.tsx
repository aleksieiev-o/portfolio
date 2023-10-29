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
        Share your story. Get in touch
      </h4>

      <div className={'grid grid-cols-1 gap-2 w-full'}>
        <p className={'text-md'}>
          Open for freelance opportunities if you have an interesting proposition.
        </p>

        <p className={'text-md'}>
          Feel free to contact me.
        </p>
      </div>

      <div className={'grid grid-cols-1 gap-4 md:gap-8'}>
        <div className={'flex items-start justify-start flex-nowrap gap-4'}>
          <MapPin/>

          <p className={'text-md'}>{personalInfo.country}, {personalInfo.town}</p>
        </div>

        <div className={'flex items-start justify-start flex-nowrap gap-4'}>
          <Mail/>

          <a href={`mailto:${personalInfo.email}`} className={'text-md'}>{personalInfo.email}</a>
        </div>
      </div>

      <AppSocialsList socials={socials}/>
    </div>
  );
};

export default ContactsInfo;
