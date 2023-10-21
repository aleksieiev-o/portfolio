import {IDocument} from 'my-portfolio-types';
import {fetchDataList} from '@/services/data.service';
import {EndpointsList} from '@/shared/Endpoints.enum';

export const fetchAllDocuments = async (): Promise<Array<IDocument>> => {
  return await fetchDataList(EndpointsList.DOCUMENTS);
};
