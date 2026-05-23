import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import DashboardView from '../views/DashboardView.vue'
import SettingsView from '../views/SettingsView.vue'
import SettingsProfile from '../views/SettingsProfile.vue'
import SettingsPassword from '../views/SettingsPassword.vue'

// TODO: create a variable called isLoggedIn and set it to false

// TODO: create the router using createRouter and createWebHashHistory
// add these routes:
// 1. path '/' that loads HomeView
// 2. path '/user/:id' that loads UserView
// 3. path '/dashboard' that loads DashboardView with a beforeEnter guard:
//    if isLoggedIn is false redirect to '/', otherwise call next()
// 4. path '/settings' that loads SettingsView with two children:
//    - path 'profile' that loads SettingsProfile
//    - path 'password' that loads SettingsPassword

// TODO: export the router as default