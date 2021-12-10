import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from "../views/Dashboard";
import store from "../store";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requireAuth: true } },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function isLogged() {
  return store.getters.getIsLogged
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!isLogged()) {
      next({
        path: "/",
      });
    } else {
      if (!isLogged()) {
        next({
          path: "/",
        });
      } else {
        next();
      }
    }
  } else {
    next();
  }
});

export default router
