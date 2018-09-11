import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.filter('currency', function (value) {
  if(value > 0)
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +'฿';
  else return ''
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
