import { createRouter, createWebHistory } from 'vue-router';

import MainLayout from '@/layouts/MainLayout.vue';
import Login from '@/pages/layouts/auth/Login.vue';
import Dashboard from '@/pages/Dashboard.vue';
import PreOpQuestionnaire from '@/pages/PreOpQuestionnaire.vue';
import RiskScore from '@/pages/RiskScore.vue';
import RiskMap from '@/pages/RiskMap.vue';
import Profile from '@/pages/Profile.vue';
import Settings from '@/pages/Settings.vue';
import NotFound from '@/pages/NotFound.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'dashboard', component: Dashboard },
      { path: 'pre-op', name: 'pre-op', component: PreOpQuestionnaire },
      { path: 'risk-score', name: 'risk-score', component: RiskScore },
      { path: 'risk-map', name: 'risk-map', component: RiskMap },
      { path: 'profile', name: 'profile', component: Profile },
      { path: 'settings', name: 'settings', component: Settings },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
