'use client';

import React, {FC, ReactElement} from 'react';
import {ISocial} from 'my-portfolio-types';
import {Button} from '@/components/ui/button';
import {FaBehance, FaGithub, FaInstagram, FaLinkedinIn, FaTelegram} from 'react-icons/fa6';

interface Props {
  socials: Array<ISocial>;
}

const icons = [FaGithub, FaInstagram, FaLinkedinIn, FaTelegram, FaBehance];

const AppSocialsList: FC<Props> = (props): ReactElement => {
  const {socials} = props;

  const formattedSocials = socials
    .filter((social) => social.title !== 'Email')
    .map((social) => {
      const splitTitle = social.title.slice(0, 3);
      return {
        ...social,
        IconComponent: icons.find((item) => item.name.includes(splitTitle)),
      };
    });

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
          {<social.IconComponent/>}
        </Button>
      ))}
    </div>
  );
};

export default AppSocialsList;
