<template>
<div class="w-80 flex justify-center items-center">
    <div class="w-full p-4">
        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-xl cursor-pointer " @click="clickDetail(items.id)" >
            <div class="prod-title  ">
                <p class="text-xl uppercase text-gray-900 font-bold">
                   {{items.title}}
                </p>
                <div class="uppercase text-sm text-gray-400 h-10 overflow-hidden ">
                     {{items.description}}
                </div>
                
            </div>
            <div class="prod-img">
                <img :src="items.thumbnail_url" class="w-full object-cover object-center"/>
            </div>
            <div class="mt-5">
                
                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900 w-full">
                    <p class="font-bold text-2xl mb-2 md:mb-0 mr-3 ">
                        {{items.price}}$
                    </p>
                    <button @click.stop="addToCart(items)" class="  px-3 py-2 transition ease-in duration-200 uppercase rounded-md hover:bg-gray-800 hover:text-white border-2 border-gray-400 focus:outline-none ">
                        <p  class="text-xs font-md">Add to cart</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import {
  mapActions,
  mapGetters,
    mapMutations
} from 'vuex'
export default {
   
    
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
                duration:1500,
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

<style scoped>
    @media only screen and (min-width:820px){
    .height{
        min-height: 520px;
        color:red
    }
    }
</style>
