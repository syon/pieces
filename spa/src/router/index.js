import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/screens/Hello';
import Formatter from '@/screens/Formatter';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/formatter',
      name: 'Formatter',
      component: Formatter,
    },
  ],
});
