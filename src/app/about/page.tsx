import {FC, ReactElement} from 'react';
import {IFile, IPersonalInfo, ISocial} from 'my-portfolio-types';
import {fetchPersonalInfo} from '@/services/personalInfo.service';
import {fetchMainImage} from '@/services/files.service';
import {fetchSocialsList} from '@/services/socialsList.service';

export const revalidate = 5;

const AboutPage: FC = async (): Promise<ReactElement> => {
  const personalInfo: IPersonalInfo = await fetchPersonalInfo();
  const socials: Array<ISocial> = await fetchSocialsList();
  const mainImage: IFile = await fetchMainImage();
  const socialsList = socials.filter((social) => social.visibility);

  return (
    <section className={'container mx-auto'}>
      AboutPage
    </section>
  );
};

export default AboutPage;
