import Store from "./src/views/Store.vue"
import Login from "./src/components/Auth/Login.vue"
import Register from "./src/components/Auth/Register.vue"
import Product from "./src/components/Products/ProductDetail.vue"
import Cart from "./src/components/Cart/CartItem.vue"
import CartCheckoutForm from "./src/components/Cart/CartCheckoutForm.vue"
// import {firebaseAuth} from "./config/firebaseConfig"

// const requireAuth = (to,from,next)=>{
//     const user=firebaseAuth.currentUser
//     if(!user) next({name:'login',params:{}})
//     else next()
// }

export const routes=[
    {path:'/',component:Store,name:'mainpage'},
    {path:'/login',component:Login,name:'login'},
    {path:'/register',component:Register,name:'register'},
    {path:'/product/:id',component:Product,name:'product'},
    {path:'/cart',component:Cart,name:'cart'},
    {path:'/paymentgate',component:CartCheckoutForm,name:'payment'}
]