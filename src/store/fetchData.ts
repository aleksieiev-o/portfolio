import { child, get, ref } from 'firebase/database';
import { firebaseDB } from '@/utils/firebase.config';
import { AvailableApiEndpoints } from '@/utils/AvailableApiEndpoints.enum';

// eslint-disable-next-line import/prefer-default-export
export const fetchData = async<T>(path: AvailableApiEndpoints): Promise<Array<T> | T> => {
  const dbRef = ref(firebaseDB);
  const snapshot = await get(child(dbRef, path));

  if (snapshot.exists()) {
    return snapshot.val();
  }

  console.error('Data loading is failed');
  return Promise.reject();
};
