import {FC, ReactElement} from 'react';
import {IPersonalInfo} from 'my-portfolio-types';
import {fetchPersonalInfo} from '@/services/personalInfo.service';

export const revalidate = 5;

const ContactsPage: FC = async (): Promise<ReactElement> => {
  const personalInfo: IPersonalInfo = await fetchPersonalInfo();

  return (
    <section className={'container mx-auto'}>
      ContactsPage
    </section>
  );
};

export default ContactsPage;
