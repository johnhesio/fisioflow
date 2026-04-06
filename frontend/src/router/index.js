import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../adapters/ui/views/Dashboard.vue';

// Se ainda não criou a view de pacientes, aponte para o Dashboard temporariamente
const routes = [
  { path: '/', component: Dashboard },
  { path: '/patients', component: Dashboard }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;