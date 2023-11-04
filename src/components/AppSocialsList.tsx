'use client';

import React, {FC, ReactElement} from 'react';
import {ISocial} from 'my-portfolio-types';
import {Button} from '@/components/ui/button';
import SocialDynamicIcon from '@/components/ui/custom-ui/SocialDynamicIcon';

interface Props {
  socials: Array<ISocial>;
}

const AppSocialsList: FC<Props> = (props): ReactElement => {
  const {socials} = props;

  const formattedSocials = socials
    .filter((social) => social.title !== 'Email');

  const handleButton = (url: string): void => {
    window.open(url, '_blank');
  };

  return (
    <div className={'grid grid-flow-col auto-cols-max gap-4'}>
      {formattedSocials.map((social) => (
        <Button
          onClick={() => handleButton(social.url)}
          key={social.id}
          variant={'outline'}
          size={'icon'}
          title={social.title}
          className={'shadow-md'}>
          {<SocialDynamicIcon iconName={social.iconName}/>}
        </Button>
      ))}
    </div>
  );
};

export default AppSocialsList;
