import { IPersonalInfo } from 'my-portfolio-types';
import { Endpoints } from '@/shared/Endpoints.enum';
import { fetchData } from '@/services/data.service';

export const fetchPersonalInfo = async (): Promise<IPersonalInfo> => {
  return await fetchData(Endpoints.PERSONAL_INFO);
};
