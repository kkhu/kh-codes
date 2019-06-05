import Vue from 'vue';
import App from './App';
// import './js';
// import './components';
console.log('info main js....')

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
  // render: h => h(App)
});