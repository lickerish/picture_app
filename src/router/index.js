import { createRouter, createWebHashHistory } from 'vue-router';
import SearchView from '../views/SearchView.vue';

const routes = [
  {
    path: '/',
    name: 'Search',
    component: SearchView,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    // component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
