import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../adapters/ui/views/Dashboard.vue';
import Patients from '../adapters/ui/views/Patients.vue'; // Importe a nova view

const routes = [
  { path: '/', component: Dashboard },
  { path: '/patients', component: Patients }, // Rota de pacientes atualizada
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;