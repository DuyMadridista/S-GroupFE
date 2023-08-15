import { createRouter, createWebHistory } from 'vue-router'

//const DashBoard = () => import('@/views/Dashboard.vue')
//const UserDetail = () => import('@/views/users/UserDetai.vue')
import LoginForm from '../components/auth/LoginForm.vue';
import Register from '../components/auth/RegisterForm.vue';
import UserList from '../components/User/UserList.vue';
import ResetPassword from '../components/auth/ResetPassword.vue';
import DashBoard from '../components/layout/DashBoard.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
  },
  {
    path: '/reset-pass/:email',
    name: 'reset-pass',
    component: ResetPassword,
    props: true
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/user',
    component: UserList,
  },

]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes,
})

export default router
