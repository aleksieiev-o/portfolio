import {
 createRouter, createWebHistory, Router, RouteRecordRaw,
} from 'vue-router';
import initApp from '@/router/middlewares/initApp';
import AppHome from '@/views/AppHome/index.vue';
import NotFound from '@/views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: AppHome,
    meta: {
      isListRoute: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      isListRoute: false,
    },
  },
];

const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  await initApp.call(router, { next });
  await next();
});

export default router;
