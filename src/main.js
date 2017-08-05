// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
