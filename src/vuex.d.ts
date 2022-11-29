import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  interface State {
    initAppStatus: boolean;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
