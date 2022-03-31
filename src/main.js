import Vue from 'vue'
import App from './App.vue'
import 'vue-beauty/package/style/vue-beauty.min.css'
import vueBeauty from 'vue-beauty'
 Vue.use(vueBeauty)
new Vue({
    el:'#app',
    render: h=>h(App)
})