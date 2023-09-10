import { Endpoints, EndpointsList } from '@/shared/Endpoints.enum';
import { child, DataSnapshot, get, ref } from '@firebase/database';
import { firebaseDataBase } from '@/lib/firebase';

export const fetchDataList = async<T> (path: EndpointsList): Promise<Array<T>> => {
  const snapshot: DataSnapshot = await get(child(ref(firebaseDataBase), path));

  const result = snapshot.val() || {};
  return Promise.resolve(Object
    .keys(result)
    .map((key) => ({ ...result[key] })) || []);
};

export const fetchData = async<T> (path: Endpoints): Promise<T> => {
  const snapshot: DataSnapshot = await get(child(ref(firebaseDataBase), path));
  return snapshot.val() || {};
};

export const fetchById = async <T> (path: EndpointsList, id: string): Promise<T> => {
  const snapshot: DataSnapshot = await get(child(ref(firebaseDataBase), `${path}/${id}`));
  return snapshot.val() || {};
};
