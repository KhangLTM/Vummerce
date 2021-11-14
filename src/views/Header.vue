<template>
<nav class="flex items-center bg-gray-800 p-3 flex-wrap">
    <router-link to="/" class="p-2 mr-4 inline-flex items-center">
        <img class=" w-10" src="../assets/K-logo.jpg">
        <span class="px-2 text-base lg:text-xl text-white font-bold uppercase tracking-wide">KHANG LTM</span>
    </router-link>
    <router-link to="/cart" class="md:w-1/3 md:flex md:justify-end  mt-1 mb-2 pb-13 pl-14  lg:hidden fa-stack fa-lg has-badge">
        <span class="md:mr-5 md:mt-1 pl-8 lg:hidden fa-stack fa-md has-badge" :data-count="lengthCart">
            <i class="fa fa-shopping-cart fa-stack-md red-cart"></i>
        </span>

    </router-link>
    <button @click="onToggle()" class=" mt-1  text-white inline-flex p-1 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none ">
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
</nav>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex'

export default {
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
            this.$router.push({
                name: 'mainpage'
            }).catch(() => {})
        },

        onToggle() {
            this.toggle = !this.toggle,
            this.isPop  = true
        },
        searching() {
            this.SearchProd.length > 0 ?
                this.setSearchProduct({
                    boolean: true,
                    productTitle: this.SearchProd
                }) :
                this.setSearchProduct({
                    boolean: false,
                    productTitle: ''
                })
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
    right: -5%;
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
    color: rgb(247, 241, 241);
    background: rgba(31, 41, 55);
    ;
}


@media only screen and (max-width:820px) {
    .fa-stack[data-count]:after {
        right: -30%;
        top: 8%;

    }
}
.outside {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: red;
  top: 180px;
  left: 0px;
}
</style>

