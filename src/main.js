
import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App';
// import ZfATable from 'zf-a-table'
Vue.use(Antd)
// Vue.use(ZfATable)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');