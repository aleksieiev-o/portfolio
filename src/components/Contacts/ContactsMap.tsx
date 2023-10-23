'use client';

import React, {FC, ReactElement} from 'react';
import {IPersonalInfo} from 'my-portfolio-types';

interface Props {
  personalInfo: IPersonalInfo;
}

const ContactsMap: FC<Props> = (props): ReactElement => {
  const {personalInfo} = props;

  return (
    <div>ContactsMap</div>
  );
};

export default ContactsMap;
