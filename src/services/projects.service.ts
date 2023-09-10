import { IProject } from 'my-portfolio-types';
import { EndpointsList } from '@/shared/Endpoints.enum';
import {fetchDataList} from '@/services/data.service';

export const fetchAllProjects = async (): Promise<Array<IProject>> => {
  return await fetchDataList(EndpointsList.PROJECTS);
};
