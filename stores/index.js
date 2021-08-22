import Vue from "vue";
import Vuex from "vuex"
import * as actions from "./actions"
import auth from "./modules/auth"
import cart from "./modules/cart"
import product from "./modules/product";
import comments from "./modules/comments"

Vue.use(Vuex);


export default new Vuex.Store({
    actions,
    modules:{
        auth,
        product,
        cart,
        comments
    }
})