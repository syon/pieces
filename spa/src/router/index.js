import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/screens/Hello';
import FormatterIndex from '@/screens/formatter/Index';
import FormatterHtml from '@/screens/formatter/Html';
import FormatterCss from '@/screens/formatter/Css';
import FormatterSql from '@/screens/formatter/Sql';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/formatter/',
      name: 'FormatterIndex',
      component: FormatterIndex,
    },
    {
      path: '/formatter/html/',
      name: 'FormatterHtml',
      component: FormatterHtml,
    },
    {
      path: '/formatter/css/',
      name: 'FormatterCss',
      component: FormatterCss,
    },
    {
      path: '/formatter/sql/',
      name: 'FormatterSql',
      component: FormatterSql,
    },
  ],
});
