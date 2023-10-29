'use client';

import React, {FC, ReactElement} from 'react';
import {IPersonalInfo} from 'my-portfolio-types';

interface Props {
  personalInfo: IPersonalInfo;
}

const ContactsMap: FC<Props> = (props): ReactElement => {
  const {personalInfo} = props;

  return (
    <div className={'grid grid-cols-1 w-full'}>
      <iframe
        src={''}
        title={'My location'}
        className={'w-full'}/>
    </div>
  );
};

export default ContactsMap;
