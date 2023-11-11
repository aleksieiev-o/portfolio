'use client';

import React, {FC, ReactElement} from 'react';
import {IDocument, IPersonalInfo, ISocial} from 'my-portfolio-types';
import {Mail, MapPin} from 'lucide-react';
import AppSocialsList from '@/components/AppSocialsList';
import AppDocumentsOpen from '@/components/ui/custom-ui/AppDocumentsOpen';

interface Props {
  personalInfo: IPersonalInfo;
  socials: Array<ISocial>;
  documents: Array<IDocument>;
}

const ContactsInfo: FC<Props> = (props): ReactElement => {
  const {personalInfo, socials, documents} = props;

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

          {/* TODO add map link to admin site */}
          <a href={'https://maps.app.goo.gl/9MZgWWPt1Q5YFcMV9'} target={'_blank'} className={'text-md'}>
            {personalInfo.country}, {personalInfo.town}
          </a>
        </div>

        <div className={'flex items-start justify-start flex-nowrap gap-4'}>
          <Mail/>

          <a href={`mailto:${personalInfo.email}`} className={'text-md'}>{personalInfo.email}</a>
        </div>
      </div>

      <AppSocialsList socials={socials}/>

      <div className={'grid grid-cols-1 content-center justify-items-start gap-2 xl:gap-4'}>
        <p className={'text-md'}>Here is a list of documents you can review</p>

        <AppDocumentsOpen documents={documents}/>
      </div>
    </div>
  );
};

export default ContactsInfo;
