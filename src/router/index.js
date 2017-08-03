import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/screens/Hello';
import Chartjs from '@/screens/chartjs/Chartjs';
import FormatterHtml from '@/screens/formatter/Html';
import FormatterCss from '@/screens/formatter/Css';
import FormatterSql from '@/screens/formatter/Sql';
import Checkbox from '@/screens/tips/Checkbox';
import WordsAdage from '@/screens/words/Adage';
import WordsBless from '@/screens/words/Bless';
import UrlEncode from '@/screens/converter/UrlEncode';
import PixelColor from '@/screens/misc/PixelColor';
import Vsix from '@/screens/misc/Vsix';
import NotFound from '@/screens/NotFound';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: { title: '' },
    },
    {
      path: '/chartjs/',
      name: 'Chartjs',
      component: Chartjs,
      meta: { title: 'Chart.js' },
    },
    {
      path: '/formatter/html/',
      name: 'FormatterHtml',
      component: FormatterHtml,
      meta: { title: 'HTML Formatter' },
    },
    {
      path: '/formatter/css/',
      name: 'FormatterCss',
      component: FormatterCss,
      meta: { title: 'CSS Formatter' },
    },
    {
      path: '/formatter/sql/',
      name: 'FormatterSql',
      component: FormatterSql,
      meta: { title: 'SQL Formatter' },
    },
    {
      path: '/tips/checkbox/',
      name: 'Checkbox',
      component: Checkbox,
      meta: { title: 'Checkbox' },
    },
    {
      path: '/words/adage/',
      name: 'WordsAdage',
      component: WordsAdage,
      meta: { title: '心に響く言葉' },
    },
    {
      path: '/words/bless/',
      name: 'WordsBless',
      component: WordsBless,
      meta: { title: 'Words of Blessings' },
    },
    {
      path: '/url-encode-decode/',
      name: 'UrlEncode',
      component: UrlEncode,
      meta: { title: 'URLエンコード・デコード' },
    },
    {
      path: '/misc/pixel-color/',
      name: 'PixelColor',
      component: PixelColor,
      meta: { title: 'Pixel Color Picker' },
    },
    {
      path: '/misc/vscode-vsix/',
      name: 'Vsix',
      component: Vsix,
      meta: { title: 'VSCode - VSIX Downloader' },
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
      meta: { title: '404' },
    },
    {
      path: '*',
      redirect: { name: 'NotFound' },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const t = to.meta.title;
  const s = 'syon/pieces';
  document.title = t ? `${t} :: ${s}` : `${s}`;
  next();
});

export default router;
