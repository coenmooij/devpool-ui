import Vue from 'vue';
import Router from 'vue-router';
import Auth from '@/components/authentication/Auth';
import Login from '@/components/authentication/Login';
import RegisterDeveloper from '@/components/authentication/RegisterDeveloper';
import PasswordReset from '@/components/authentication/PasswordReset';
import Dashboard from '@/components/layout/Dashboard';
import DeveloperList from '@/components/backoffice/DeveloperList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth,
      redirect: { name: 'Login' },
      meta: { isPublic: true },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login,
        }, {
          path: 'register-developer',
          name: 'RegisterDeveloper',
          component: RegisterDeveloper,
        }, {
          path: 'password-reset',
          name: 'PasswordReset',
          component: PasswordReset,
        },
      ],
    }, {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      redirect: { name: 'DeveloperList' },
      meta: { isPrivate: true },
      children: [
        {
          path: 'developer-list',
          name: 'DeveloperList',
          component: DeveloperList,
        },
      ],
    },
  ],
});
