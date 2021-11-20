<template>
<!-- <nav class="flex items-center bg-gray-800 p-3 flex-wrap">
    <router-link to="/" class="p-2 mr-4 inline-flex items-center">
        <img class=" w-10" src="../assets/K-logo.jpg">
        <span class="px-2 text-base lg:text-xl text-white font-bold uppercase tracking-wide">KHANG LTM</span>
    </router-link>
   

    </router-link>
    <buttonclass=" mt-1  text-white inline-flex p-1 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none ">
        <i class="fas fa-bars fa-lg"></i>
    </button>
    <div  class=" hidden ml-8 w-1/3 lg:w-1/2 md:relative md:block md:ml-20  text-gray-600">
        <input type="search" @input="searching()" v-model="SearchProd" placeholder="Search" class="w-full bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
        </button>
    </div>
    <div  class="nav  top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto  " :class="{hidden:toggle}">
        <div class=" lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">

            <a v-if="currentUser.name" href="#" class="lg:inline-flex font-bold lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white">
                <span>Hello , {{currentUser.name}} !</span>
            </a>

            <a href="#" class="lg:inline-flex lg:text-center lg:w-20 w-full px-3 py-2 rounded text-gray-400 items-center justify-center">
                <router-link to="/cart">
                    <span class="hidden lg:block fa-stack fa-lg has-badge" :data-count="lengthCart">
                        <i class="fa fa-shopping-cart fa-stack-md red-cart"></i>
                    </span>

                </router-link>
            </a>
            <router-link active-class="bg-gray-900" to="/login" v-show="!isLoggedIn" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white">
                <span>Login</span>
            </router-link>
            <a v-if="isLoggedIn" @click="onLogOut" class="cursor-pointer lg:w-auto font-medium w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white">
                <span>Log Out</span>
            </a>
            <router-link active-class="bg-gray-900" to="/register" v-else class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white">
                <span>Regiseter</span>
            </router-link>
        </div>
    </div>
    <div v-if="isPop" class="outside" v-on:click="away()"></div>
</nav> -->
        
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
                                <div :class="{hidden:toggle}" class="origin-top-right  w-60  rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5  place" >
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
    top:5.5%;
    right:12%;
    z-index: 9999999999999;
}   

@media only screen and (max-width:820px) {
    .fa-stack[data-count]:after {
        left: 50%;
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

