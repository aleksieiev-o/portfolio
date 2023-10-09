import {FC, ReactElement} from 'react';
import {IFile, IPersonalInfo, ISocial} from 'my-portfolio-types';
import {fetchPersonalInfo} from '@/services/personalInfo.service';
import {fetchMainImage} from '@/services/files.service';
import {fetchSocialsList} from '@/services/socialsList.service';
import PageTitle from '@/components/ui/custom-ui/PageTitle';
import ScrollContentWrapper from '@/components/ui/custom-ui/ScrollContentWrapper';
import AboutAvatar from '@/components/About/AboutAvatar';
import AboutInfo from '@/components/About/AboutInfo';

export const revalidate = 5;

const AboutPage: FC = async (): Promise<ReactElement> => {
  const personalInfo: IPersonalInfo = await fetchPersonalInfo();
  const socials: Array<ISocial> = await fetchSocialsList();
  const mainImage: IFile = await fetchMainImage();
  const socialsList = socials.filter((social) => social.visibility);

  return (
    <section className={'w-full h-full grid grid-cols-1 gap-4 content-start overflow-hidden'}>
      <PageTitle title={'About me'}/>

      <ScrollContentWrapper>
        <div className={'grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-4'}>
          <AboutAvatar file={mainImage} personalInfo={personalInfo} socials={socialsList}/>

          <AboutInfo personalInfo={personalInfo} socialsList={socialsList}/>
        </div>
      </ScrollContentWrapper>
    </section>
  );
};

export default AboutPage;
