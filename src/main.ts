import './styles/index.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, injectionKey } from '@/store';

import './utils/firebase.config';

createApp(App).use(store, injectionKey).use(router).mount('#app');
