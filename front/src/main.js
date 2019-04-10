import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/router';
import store from './store/';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-material-design-icons/styles.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
