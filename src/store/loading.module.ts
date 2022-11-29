interface LoadingModuleState {
  isGlobalLoading: boolean;
}

const loadingModule = {
  state: (): LoadingModuleState => ({
    isGlobalLoading: false,
  }),
  getters: {
    getGlobalLoading: (state: LoadingModuleState) => state.isGlobalLoading,
  },
  mutations: {
    setGlobalLoading(state: LoadingModuleState, val: boolean) {
      state.isGlobalLoading = val;
    },
  },
};

export default loadingModule;
