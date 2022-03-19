import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Error404 from '@/views/Error404.vue';
import store from '@/store';
import StoreModules from '@/store/storeSubModules';
import { MultiBotStoreGetters } from '@/store/modules/botStoreWrapper';
import { auth } from '@/firebase'
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
      allowAnonymous: true,
    },
  },
  {
    path: '/trade',
    name: 'Trading',
    component: () => import('@/views/Trading.vue'),
  },
  {
    path: '/login2',
    name: 'Login2',
    component: () => import('@/views/Logintest.vue')
  },
  {
    path: '/per',
    name: 'Per',
    component: () => import('@/views/Per.vue'),
  },
  {
    path: '/graph',
    name: 'Graph',
    component: () => import('@/views/Graphs.vue'),
  },
  {
    path: '/logs',
    name: 'Logs',
    component: () => import('@/views/LogView.vue'),
  },
  {
    path: '/backtest',
    name: 'Backtest',
    component: () => import('@/views/Backtesting.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
  },
  {
    path: '/balance',
    name: ' Balance',
    component: () => import('@/components/ftbot/Balance.vue'),
  },
  {
    path: '/open_trades',
    component: () => import('@/views/TradesList.vue'),
  },

  {
    path: '/trade_history',
    component: () => import('@/views/TradesList.vue'),
    props: { history: true },
  },
  {
    path: '/pairlist',
    component: () => import('@/components/ftbot/FTBotAPIPairList.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: '*',
    name: '404',
    component: Error404,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const hasBots = store.getters[`${StoreModules.ftbot}/${MultiBotStoreGetters.hasBots}`];
  if (!to.meta?.allowAnonymous && !hasBots) {
    // Forward to login if login is required
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login2' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('login2')
    return;
  }

  next();
})

export default router;
