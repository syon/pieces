import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/screens/Hello';
import Chartjs from '@/screens/chartjs/Chartjs';
import FormatterIndex from '@/screens/formatter/Index';
import FormatterHtml from '@/screens/formatter/Html';
import FormatterCss from '@/screens/formatter/Css';
import FormatterSql from '@/screens/formatter/Sql';
import Checkbox from '@/screens/tips/Checkbox';
import WordsAdage from '@/screens/words/Adage';
import WordsBless from '@/screens/words/Bless';
import UrlEncode from '@/screens/converter/UrlEncode';
import PixelColor from '@/screens/misc/PixelColor';
import Vsix from '@/screens/misc/Vsix';

Vue.use(Router);

export default new Router({
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
      path: '/formatter/',
      name: 'FormatterIndex',
      component: FormatterIndex,
      meta: { title: 'Formatter' },
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
      path: '/converter/url-encode/',
      name: 'UrlEncode',
      component: UrlEncode,
      meta: { title: 'URLエンコード' },
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
  ],
});
