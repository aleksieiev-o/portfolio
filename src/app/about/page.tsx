import {FC, ReactElement} from 'react';
import {IDocument, IFile, IPersonalInfo, ISocial} from 'my-portfolio-types';
import {fetchPersonalInfo} from '@/services/personalInfo.service';
import {fetchMainImage} from '@/services/files.service';
import {fetchSocialsList} from '@/services/socialsList.service';
import PageTitle from '@/components/ui/custom-ui/PageTitle';
import ScrollContentWrapper from '@/components/ui/custom-ui/ScrollContentWrapper';
import AboutAvatar from '@/components/About/AboutAvatar';
import AboutInfo from '@/components/About/AboutInfo';
import {fetchAllDocuments} from '@/services/documents.service';

export const revalidate = 5;

const AboutPage: FC = async (): Promise<ReactElement> => {
  const personalInfo: IPersonalInfo = await fetchPersonalInfo();
  const documents: Array<IDocument> = await fetchAllDocuments();
  const socials: Array<ISocial> = await fetchSocialsList();
  const mainImage: IFile = await fetchMainImage();
  const socialsList = socials
    .sort((a, b) => parseInt(a.position, 10) - parseInt(b.position, 10))
    .filter((social) => social.visibility);

  return (
    <section className={'w-full h-full grid grid-cols-1 gap-4 content-start overflow-hidden'}>
      <PageTitle title={'About me'}/>

      <ScrollContentWrapper>
        <div className={'grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-6 md:gap-12'}>
          <AboutAvatar file={mainImage} personalInfo={personalInfo} socials={socialsList}/>

          <AboutInfo personalInfo={personalInfo} documents={documents}/>
        </div>
      </ScrollContentWrapper>
    </section>
  );
};

export default AboutPage;
