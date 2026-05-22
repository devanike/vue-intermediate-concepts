import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import DashboardView from '../views/DashboardView.vue'
import SettingsView from '../views/SettingsView.vue'
import SettingsProfile from '../views/SettingsProfile.vue'
import SettingsPassword from '../views/SettingsPassword.vue'

const isLoggedIn = false

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/dashboard',
      component: DashboardView,
      beforeEnter: (to, from, next) => {
        if (!isLoggedIn) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/settings',
      component: SettingsView,
      children: [
        {
          path: 'profile',
          component: SettingsProfile
        },
        {
          path: 'password',
          component: SettingsPassword
        }
      ]
    }
  ]
})

export default router