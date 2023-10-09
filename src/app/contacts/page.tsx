import {FC, ReactElement} from 'react';
import {IPersonalInfo, ISocial} from 'my-portfolio-types';
import {fetchPersonalInfo} from '@/services/personalInfo.service';
import {fetchSocialsList} from '@/services/socialsList.service';

export const revalidate = 5;

const ContactsPage: FC = async (): Promise<ReactElement> => {
  const personalInfo: IPersonalInfo = await fetchPersonalInfo();
  const socials: Array<ISocial> = await fetchSocialsList();
  const socialsList = socials.sort((a, b) => a.position - b.position).filter((social) => social.visibility);

  return (
    <section className={'container mx-auto'}>
      ContactsPage
    </section>
  );
};

export default ContactsPage;
