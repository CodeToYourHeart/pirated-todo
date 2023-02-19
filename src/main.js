import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import CustomPlugin from "@/plugins/CustomPlugin";
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(CustomPlugin);

new Vue({
  el: '#app',
  render: h => h(App),
});