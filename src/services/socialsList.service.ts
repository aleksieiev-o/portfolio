import { ISocial } from 'my-portfolio-types';
import { EndpointsList } from '@/shared/Endpoints.enum';
import { fetchDataList } from '@/services/data.service';

export const fetchSocialsList = async (): Promise<Array<ISocial>> => {
  return await fetchDataList(EndpointsList.SOCIALS);
};
