import { IFile } from 'my-portfolio-types';
import { Endpoints } from '@/shared/Endpoints.enum';
import { fetchData } from '@/services/data.service';

export const fetchBio = async (): Promise<IFile> => {
  return await fetchData(Endpoints.BIO);
};

export const fetchMainImage = async (): Promise<IFile> => {
  return await fetchData(Endpoints.MAIN_IMAGE);
};
