import {FC, ReactElement} from 'react';
import {IDocument, IFile, IPersonalInfo} from 'my-portfolio-types';
import {fetchPersonalInfo} from '@/services/personalInfo.service';
import {fetchMainImage} from '@/services/files.service';
import ScrollContentWrapper from '@/components/ui/custom-ui/ScrollContentWrapper';
import HomeInfo from '@/components/Home/HomeInfo';
import Image from 'next/image';
import {fetchAllDocuments} from '@/services/documents.service';

export const revalidate = 5;

const HomePage: FC = async (): Promise<ReactElement> => {
  const documents: Array<IDocument> = await fetchAllDocuments();
  const personalInfo: IPersonalInfo = await fetchPersonalInfo();
  const mainImage: IFile = await fetchMainImage();

  return (
    <section className={'w-full h-full grid grid-cols-1 content-center overflow-hidden'}>
      <ScrollContentWrapper>
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 py-4'}>
          <HomeInfo personalInfo={personalInfo} documents={documents}/>

          <div className={'grid grid-cols-1 content-center justify-items-center'}>
            <Image className={''} src={mainImage.fileSrc} alt={mainImage.fileName} width={644} height={644}/>
          </div>
        </div>

        {/* TODO remove it */}
        {/*<div className={'grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 py-4 h-full relative'}>*/}
        {/*  <HomeInfo personalInfo={personalInfo} documents={documents}/>*/}

        {/* eslint-disable-next-line max-len */}
        {/*  <div className={'grid grid-cols-1 content-center justify-items-center absolute lg:relative right-0 sm:top-[50%] sm:translate-y-[-50%] bottom-0 opacity-[75%] lg:opacity-100 max-h-[644px] max-w-[644px] z-0'}>*/}
        {/*    <Image src={mainImage.fileSrc} alt={mainImage.fileName} width={650} height={650}/>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </ScrollContentWrapper>
    </section>
  );
};

export default HomePage;
