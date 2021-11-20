<template>

<div>
    <nav class="bg-gray-600   shadow ">
        <div class="max-w-7xl mx-auto px-8">
            <div class="flex items-center justify-between h-14">
                <div class=" flex items-center">
                    <router-link to='/' class="flex-shrink-0" href="/">
                        <img class="h-8 w-8" src="https://viostore.vn/wp-content/uploads/2014/12/official-apple-logo-png-248x300.png" alt="Workflow"/>
                    </router-link>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <router-link to="/" class="text-gray-300 text-sm hover:text-white  px-3 py-2 rounded-md  font-medium" href="/#">
                                Home
                            </router-link>
                            <a class="text-gray-300 text-sm   hover:text-white  px-3 py-2 rounded-md  font-medium" href="/#">
                                Product
                            </a>
                            <a class="text-gray-300 text-sm  hover:text-white  px-3 py-2 rounded-md  font-medium" href="/#">
                                Content
                            </a>
                            <a class="text-gray-300 text-sm  hover:text-white  px-3 py-2 rounded-md  font-medium" href="/#">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="block w-50">
                    <div class="ml-4 flex  items-center md:ml-6">
                        <div class="ml-3 ">
                            <div class="flex  text-left">
                                <search-box class="hidden md:block h-10"></search-box>
                                <div class="relative ml-5 flex flex-end">
                                        <button  @click="onToggle()"  type="button" class=" flex items-center justify-center w-full  px-4 py-2 text-sm font-medium text-gray-700  " id="options-menu">
                                            <svg width="20" fill="currentColor" height="20" class="text-gray-300 hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                            </svg>
                                        </button>
                                    
                                    <router-link to="/cart" class="flex items-center pl-4 md:px-2 fa-stack fa-lg has-badge mb-1  ">
                                            <span class="   fa-stack fa-md has-badge   " :data-count="lengthCart">
                                                <i class="fa fa-shopping-cart fa-stack-md red-cart text-gray-300 hover:text-white "></i>
                                            </span>
                                    </router-link>
                    
                                </div>
                                <div :class="{hidden:toggle}" class="place right-10  origin-top-right  w-60  rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5  " >
                                    <div class="py-4 text-center " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a  v-show="isLoggedIn" class="block  px-4 py-2  text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 " role="menuitem">
                                            <span class="flex flex-col">
                                                <span>
                                                    Hello , {{currentUser.name}} !
                                                </span>
                                            </span>
                                        </a>
                                        <router-link  active-class="bg-gray-100"  v-show="!isLoggedIn" to='/login'  class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100" role="menuitem">
                                            <span class="flex flex-col">
                                                <span>
                                                    Sign in 
                                                </span>
                                            </span>
                                        </router-link>
                                          <router-link  active-class="bg-gray-100"  v-show="!isLoggedIn" to='/register'  class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100  dark:text-gray-100" role="menuitem">
                                            <span class="flex flex-col">
                                                <span>
                                                    Sign up
                                                </span>
                                            </span>
                                        </router-link>
                                        
                                        
                                        <a @click="onLogOut" v-show="isLoggedIn" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100  dark:text-gray-100" role="menuitem">
                                            <span class="flex flex-col">
                                                <span>
                                                    Logout
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
            <div v-if="isPop" class="outside  " v-on:click="away()"></div>

</div>

</template>

<script>
import {
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex'
import SearchBox from './SearchBox.vue'
export default {
    components:{
        SearchBox,
    },
    data() {
        return {
            toggle: true,
            SearchProd: '',
            isPop:false,

        }
    },

    computed: {
        ...mapGetters(['currentUser', 'isLoggedIn', 'cartItem']),
        lengthCart: function () {
            return this.cartItem.reduce((total, item) => {
                total += Number(item.number)
                return total
            }, 0)
        }

    },
    methods: {
        ...mapMutations(['setSearchProduct']),
        ...mapActions(['logOut', 'saveCart', 'removeCart']),
        onLogOut() {
            this.saveCart({
                uid: this.currentUser.uid,
                cartListItem: this.cartItem
            })
            this.removeCart()
            this.logOut()
            this.$router.go()
        },

        onToggle() {
            this.toggle = !this.toggle,
            this.isPop  = true
        },
        away() {
            this.toggle = true;
            this.isPop = false;
        }
    
    },


}
</script>

<style >
.fa-stack[data-count]:after {
    position: absolute;
    left: 60%;
    top: 10%;
    content: attr(data-count);
    font-size: 50%;
    padding: .6em;
    border-radius: 999px;
    line-height: .5em;
    color: rgb(252, 249, 249);
    text-align: center;
    min-width: 2em;
    font-weight: bold;
    background: rgb(190, 29, 29);
    border-style: solid;

}

.fa-circle {
    color: white;
}

.red-cart {
    font-size:1.3rem;
}
.place{
    position: absolute;
    top:55px;
    z-index: 9999999999999;
}

@media only screen and (max-width:820px) {
    .fa-stack[data-count]:after {
        left: 55%;
        top: 8%;
    };

        
}
.outside {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
}


</style>

