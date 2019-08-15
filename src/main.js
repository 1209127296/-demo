// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'mint-ui/lib/style.css'
import addVuePrototype from './js/addVuePrototype'
import GlobalComponent from '@/js/GlobalComponent.js'


Vue.config.productionTip = false;
Vue.use(GlobalComponent);
Vue.use(MintUI);
Vue.use(Vant);
addVuePrototype(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
