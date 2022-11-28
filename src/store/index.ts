import {
  createLogger,
  createStore, ModuleTree, Plugin, Store, useStore,
} from 'vuex';
import { InjectionKey } from 'vue';
import firebaseModule from '@/store/firebase.module';

const DEV_MODE = process.env.NODE_ENV === 'development';

interface RootState {
  initAppStatus: boolean;
}

export const injectionKey: InjectionKey<Store<RootState>> = Symbol('vuex injectionKey symbol');

const plugins: Plugin<RootState>[] = DEV_MODE ? [createLogger()] : [];

const modules: ModuleTree<RootState> = {
  firebaseModule,
};

export const store = createStore<RootState>({
  strict: DEV_MODE,
  plugins,
  modules,
  state: {
    initAppStatus: false,
  },
  getters: {
    getInitAppStatus: (state: RootState) => state.initAppStatus,
  },
  mutations: {
    toggleInitAppStatus(state: RootState) {
      state.initAppStatus = true;
    },
  },
  actions: {
    async initApp({ commit, dispatch }) {
      await dispatch('initFirebaseApp');
      await commit('toggleInitAppStatus');
    },
  },
});

export const useAppStore = (): Store<RootState> => useStore(injectionKey);
