import { store } from '@/store';

export default async function initAppMiddleware({ next }: any): Promise<void> {
  if (!store.getters.getInitAppStatus) {
    await store.dispatch('initApp');

    await next();
    return Promise.reject();
  }

  return Promise.resolve();
}
