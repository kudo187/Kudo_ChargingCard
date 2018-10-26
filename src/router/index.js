import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import History from '@/components/History'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Pending from '@/components/Pending'
import Profile from '@/components/Profile'
import Transaction from '@/components/Transaction'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // component: Home
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/pending',
      name: 'Pending',
      component: Pending
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/transaction',
      name: 'Transaction',
      component: Transaction
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
