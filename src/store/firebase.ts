import { StoreOptions } from 'vuex';

// interface State {
//   firebaseApp: any;
//   firebaseDB: any;
// }

const firebase: StoreOptions<any> = {
  state: {
    firebaseApp: null,
    firebaseDB: null,
  },
  getters: {
    getFirebaseApp: (state) => state.firebaseApp,
    getFirebaseDB: (state) => state.firebaseDB,
  },
  mutations: {
    setFirebaseApp(state, val) {
      state.firebaseApp = val;
    },
    setFirebaseDB(state, val) {
      state.firebaseDB = val;
    },
  },
  actions: {
  },
};

export default firebase;
