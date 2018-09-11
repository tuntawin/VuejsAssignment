import Vue from 'vue'
import App from './App.vue'

Vue.filter('currency', function (value) {
  if(value > 0)
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +'฿';
  else return ''
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
