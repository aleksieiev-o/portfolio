import {FC, ReactElement} from 'react';
import {IFile, IPersonalInfo} from 'my-portfolio-types';
import {fetchPersonalInfo} from '@/services/personalInfo.service';
import {fetchBio, fetchMainImage} from '@/services/files.service';

export const revalidate = 5;

const HomePage: FC = async (): Promise<ReactElement> => {
  const personalInfo: IPersonalInfo = await fetchPersonalInfo();
  const mainImage: IFile = await fetchMainImage();
  const bio: IFile = await fetchBio();

  return (
    <section className={'container mx-auto mx-auto'}>
      HomePage
    </section>
  );
};

export default HomePage;
