<template>
    <div  @click="clickDetail(items.id)" id="prod" class="cursor-pointer  lg:flex lg:flex-col justify-between  max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-5 height">
  <div   class="  px-4 py-5  ">
    <h1  class="cursor-pointer text-gray-900 font-bold text-3xl uppercase hover:text-blue-600">{{items.title}}</h1>
    <div>
        <Start />
    </div>
    <p class="text-gray-600 text-sm mt-0">{{items.description}}</p>
  </div>
  <img class=" h-56 w-full object-cover mt-3" :src="items.thumbnail_url" alt="NIKE AIR">
  <div class=" flex  items-center justify-between px-4 py-2 bg-gray-800">
    <h1  class=" text-gray-200 font-bold text-2xl">{{items.price}} $</h1>
    <button @click="addToCart(items)" class="px-3 py-1 bg-gray-100   text-black hover:bg-blue-400 font-semibold rounded">Add to card</button>
  </div>
</div>
</template>

<script>
import {
  mapActions,
  mapGetters,
    mapMutations
} from 'vuex'
import Start from './Start.vue'
export default {
    components:{
        Start

    },
    
    props: {
        items: {
            type: Object,
            required: true,
        }

    },
    computed:{
        ...mapGetters(['currentUser','cartItem'])
    },
    
    
    methods: {
        ...mapActions(['saveCart']),
        ...mapMutations(['updateCart']),
        clickDetail(_id) {
            this.$router.push({
                name: 'product',
                params: {
                    id: _id
                }
            })
        },
         showToast(){
            this.$toast.open({
                message:"Added To Your Cart",
                type:"success",
                duration:2000,
                dissmissible:true,
                queue:false,
                position:"top-right"

            })
        },


        addToCart(item) {
            let order = Object.assign({}, item, {
                number: 1
            })
            this.updateCart(order)
            this.saveCart({
                uid: this.currentUser.uid,
                cartListItem: this.cartItem
            })
             this.showToast()
        }
        }
       

}
</script>

<style>
    @media only screen and (min-width:820px){
    .height{
        min-height: 520px;
        color:red
    }
    }
</style>
