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
    },
    {
      path: '/chartjs/',
      name: 'Chartjs',
      component: Chartjs,
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
    {
      path: '/tips/checkbox/',
      name: 'Checkbox',
      component: Checkbox,
    },
    {
      path: '/words/adage/',
      name: 'WordsAdage',
      component: WordsAdage,
    },
    {
      path: '/words/bless/',
      name: 'WordsBless',
      component: WordsBless,
    },
    {
      path: '/converter/url-encode/',
      name: 'UrlEncode',
      component: UrlEncode,
    },
    {
      path: '/misc/pixel-color/',
      name: 'PixelColor',
      component: PixelColor,
    },
    {
      path: '/misc/vscode-vsix/',
      name: 'Vsix',
      component: Vsix,
    },
  ],
});
