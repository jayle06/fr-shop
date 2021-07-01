import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

var Vue = require('vue');
var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

