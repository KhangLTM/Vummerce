<template>
   <div>
   
       <Loading v-if="isLoad" />
      <div v-else>
   <section class="text-gray-700 body-font overflow-hidden bg-white">
  <div class="container px-5 py-8 md:py-14 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img  class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" :src="product.thumbnail_url">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">MACBOOK</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{product.title}}</h1>
        <div class="flex mb-4">
          
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">{{product.description}}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"> 
        </div>
         <span class="md:text-xl text-red-500  pt-10" >Only {{product.quantity}} left - order soon</span>
        <div class="flex py-7 ">
         
          <span class=" title-font font-medium text-4xl font-bold text-gray-900">{{product.price}} $</span>
          
           <button  @click="addToCart(product)" type="button" class=" bg-gray-100 flex ml-auto py-2 px-6   hover:bg-gray-800 hover:text-white focus:ring-gray-500 focus:ring-offset-gray-200 text-white  transition ease-in duration-200 text-gray-900 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                   Add To Cart
          </button>

        </div>
      </div>
          <Comments class="w-full  mt-5" />
    </div>
      
  </div>
  
</section>
      </div>
   
   </div>
   
  



</template>

<script>
import {
  mapActions,
    mapGetters, mapMutations
} from 'vuex'

import Comments from '../comments.vue'
import Loading from '../../views/Loading.vue'
export default {
    components:{
        Comments,
        Loading
    },
    data(){
      return{
        isLoad:true
      }
    },
    computed: {
        ...mapGetters(['products','currentUser','cartItem']),
        product: function () {
            
                let id = this.$route.params.id
                let item = this.products.find((product) => {
                    return product.id == id
                })
                return item
              }  
        
    },
    methods:{
         ...mapActions(['saveCart','getProductList']),
         ...mapMutations(['updateCart']),
         showToast(){
            this.$toast.open({
                message:"Added To Your Cart",
                type:"success",
                duration:1500,
                dissmissible:true,
                queue:false,
                position:"top-right"

            })
        },
        

        addToCart(prod) {
            let order = Object.assign({}, prod, {
                number: 1
            })
            this.showToast()
            this.updateCart(order)
            this.saveCart({
                uid: this.currentUser.uid,
                cartListItem: this.cartItem
            })
        }
        },
        created(){
          this.getProductList()
          setTimeout(()=>{
            this.isLoad=false
          },800)
        }
   
   }




</script>

<style  scoped>
      
</style>


