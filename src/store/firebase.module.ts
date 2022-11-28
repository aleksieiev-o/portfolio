import { initializeFirebaseApp } from '../../firebase';

interface FirebaseModuleState {
  firebaseApp: any;
  firebaseDB: any;
}

const firebaseModule = {
  state: (): FirebaseModuleState => ({
    firebaseApp: null,
    firebaseDB: null,
  }),
  getters: {
    getFirebaseApp: (state: FirebaseModuleState) => state.firebaseApp,
    getFirebaseDB: (state: FirebaseModuleState) => state.firebaseDB,
  },
  mutations: {
    setFirebaseApp(state: FirebaseModuleState, val: any) {
      state.firebaseApp = val;
    },
    setFirebaseDB(state: FirebaseModuleState, val: any) {
      state.firebaseDB = val;
    },
  },
  actions: {
    initFirebaseApp({ commit }: any) {
      const { firebaseApp, firebaseDB } = initializeFirebaseApp();

      commit('setFirebaseApp', firebaseApp);
      commit('setFirebaseDB', firebaseDB);
    },
  },
};

export default firebaseModule;
