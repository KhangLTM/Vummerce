import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from "../router"
import store from "../stores"
import VueToast from "vue-toast-notification"
import "vue-toast-notification/dist/theme-sugar.css"
import { firebaseListener } from '../config/firebaseConfig'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './style/index.css'

const  options  =  { 
  confirmButtonColor : '#41b882' , 
  cancelButtonColor : '#ff7674' , 
} ;


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueToast)
Vue.use(VueSweetalert2,options)
firebaseListener(authStatusChange);

const router = new VueRouter({    
    mode:'hash',
    // linkActiveClass: ' bg-gray-900 ',

    scrollBehavior() {
        return { x: 0, y: 0 }
      },  
    
    routes,  
})


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

function authStatusChange(isLogged,user){
    if(store){
        store.commit('authStatusChange')
      if(user){
          store.dispatch('getCart',{uid:user.uid,currentCart:store.getters.cartItem})
      }
    }
  }
