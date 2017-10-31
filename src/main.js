// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import 'babel-polyfill';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Clipboard from 'clipboard';
import 'uikit/dist/css/uikit.css';
import './assets/uikit.theme.scss';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

UIkit.use(Icons);

const clipboard = new Clipboard('.app-clipboard');
clipboard.on('success', (e) => {
  UIkit.notification({
    message: 'Copy OK!',
    pos: 'top-right',
    timeout: 2000,
  });
  e.clearSelection();
});

Vue.use(VueAnalytics, {
  id: 'UA-37634759-2',
  router,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
