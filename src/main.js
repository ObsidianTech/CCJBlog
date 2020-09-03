import Vue from 'vue';
import PrismicVue from 'prismic-vue';
import linkResolver from './link-resolver';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
