import {
  createLogger,
  createStore, ModuleTree, Plugin, Store, useStore,
} from 'vuex';
import { InjectionKey } from 'vue';
import loadingModule from '@/store/loading.module';
import userInfoModule from '@/store/userInfo.module';
import projectsModule from '@/store/projects.module';
import skillsModule from '@/store/skills.module';

const DEV_MODE = process.env.NODE_ENV === 'development';

interface RootState {
  initAppStatus: boolean;
}

export const injectionKey: InjectionKey<Store<RootState>> = Symbol('vuex injectionKey symbol');

const plugins: Plugin<RootState>[] = DEV_MODE ? [createLogger()] : [];

const modules: ModuleTree<RootState> = {
  loadingModule,
  userInfoModule,
  projectsModule,
  skillsModule,
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
    initApp({ commit }) {
      commit('toggleInitAppStatus');
    },
  },
});

export const useAppStore = (): Store<RootState> => useStore(injectionKey);
