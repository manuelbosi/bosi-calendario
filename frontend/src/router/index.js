import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store";
import Dashboard from "../views/Dashboard";
import Calendar from "../views/Calendar";
import Customers from "../views/Customers";
import Notes from "../views/Notes";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/calendar', name: 'Calendar', component: Calendar, meta: { requiresAuth: true } },
  { path: '/customers', name: 'Customers', component: Customers, meta: { requiresAuth: true } },
  { path: '/notes', name: 'Notes', component: Notes, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function isLogged() {
  return store.getters.getIsLogged
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLogged()) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else {
    next({ path: '/dashboard'} );
  }
});

export default router
