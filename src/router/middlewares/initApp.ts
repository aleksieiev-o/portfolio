import store from '../../store';
import { initializeFirebaseApp } from '../../../firebase';

export default function initApp({ next }: any): Promise<void> {
  if (!store.getters.getInitAppStatus) {
    const { firebaseApp, firebaseDB } = initializeFirebaseApp();

    store.commit('setFirebaseApp', firebaseApp);
    store.commit('setFirebaseDB', firebaseDB);
    store.commit('setInitApp');

    next();
    return Promise.reject();
  }

  return Promise.resolve();
}
