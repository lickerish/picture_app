import { createRouter, createWebHashHistory } from 'vue-router';
import SearchView from '../views/SearchView.vue';

const routes = [
  {
    path: '/',
    name: 'Search',
    component: SearchView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
