import { createStore } from 'vuex';
import firebase from '@/store/firebase';

export default createStore({
  modules: {
    firebase,
  },
  state: {
    initAppStatus: false,
  },
  getters: {
    getInitAppStatus: (state) => state.initAppStatus,
  },
  mutations: {
    setInitApp(state) {
      state.initAppStatus = true;
    },
  },
  actions: {
  },
});
