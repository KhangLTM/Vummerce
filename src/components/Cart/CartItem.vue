<template>
    <div class=" flex items-center justify-center my-10">
  <div class="flex   lg:flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
    <div class="flex-1">
      <table  class="w-full   text-sm lg:text-base" >
        
          <tr class=" w-full items-center "  v-show="cartItem.length">
            <th class=" hidden md:table-cell"></th>
            <th class="  lg:px-4 text-xl  text-left">Product</th>
            <th class="hidden lg:block py-6   lg:text-right text-right lg:pl-0">
                  Quantity
            </th>
            <th class="hidden text-right md:table-cell">Unit price</th>
            <th class=" lg:block hidden w-full text-right ">Total price </th>
          </tr>
    
        <tbody >
            <div class=" text-xl font-bold md:text-2xl" v-show="!cartItem.length">You Cart Is Empty ! </div>
          <tr v-for="item in cartItem" :key="item.id">
            <td class="pb-8 lg:py-2 lg:px-2 md:table-cell">
              <a href="#">
                <img :src="item.thumbnail_url" class="w-20 rounded" alt="Thumbnail">
              </a>
            </td>
            <td>
              <p class="font-medium pt-4 md:ml-4">{{item.title}}</p>
              <form  >
                <p class="text-gray-500 md:ml-4 text-sm font-medium">Left in stock : {{item.quantity}}</p>
                <button  @click.prevent="removeItems(item)" class="text-gray-700 md:ml-4">
                  <small>(Remove item)</small>
                </button>
              </form>
            </td>
            <td class="justify-center md:justify-end md:flex md:mt-8">
            <div class="w-20 h-10">
              <div class="relative flex  w-full h-6 lg:h-8">
              <input  type="number"  @input="changeNumber(item)" @blur="zeroCase(item)" v-model="item.number"  
                class="w-3/4 lg:w-full font-semibold text-center lg:text-right text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
              </div>
            </div>

            </td>
            <td class="hidden text-right md:table-cell">
              <span class="text-sm lg:text-base font-medium">
                  {{item.price}} $
              </span>
            </td>
            <td class="w-1/6  lg:w-auto text-right">
              <span class="text-base lg:text-base font-bold">
                  {{item.NewPrice}}$
              </span>
            </td>
          </tr> 
        </tbody>
      </table>
      <hr class="pb-6 mt-6">
      <div class="my-4 mt-6 -mx-2 lg:flex">
        <div class="lg:px-2 lg:w-1/2">
          <div class="p-4 bg-gray-100 rounded-full">
            <h1 class="ml-2 font-bold uppercase">Coupon Code</h1>
          </div>
          <div class="p-4">
            <p class="mb-4 italic">If you have a coupon code, please enter it in the box below</p>
            <div class="justify-center md:flex">
              <div >
                  <div class="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
                    <input type="text" name="code"  placeholder="Apply coupon" 
                            class="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"/>
                      <button  class="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none">
                        <svg aria-hidden="true" data-prefix="fas" data-icon="gift" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"/></svg>
                        <span class="font-medium">Apply coupon</span>
                      </button>
                  </div>
              </div>
            </div>
          </div>
          <div class="p-4 mt-6 bg-gray-100 rounded-full">
            <h1 class="ml-2 font-bold uppercase">Instruction for seller</h1>
          </div>
          <div class="p-4">
            <p class="mb-4 italic">If you have some information for the seller you can leave them in the box below</p>
            <textarea class="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
          </div>
        </div>
        <div class="lg:px-2 lg:w-1/2">
          <div class="p-4 bg-gray-100 rounded-full">
            <h1 class="ml-2 font-bold uppercase">Order Details</h1>
          </div>
          <div class="p-4">
            <p class="mb-6 italic">Shipping and additionnal costs are calculated based on values you have entered</p>
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-xl text-center text-gray-900">
                    {{cartValue}} $
                  </div>
                </div>
              <a>
                <button @click="checkLoggedIn" class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                  <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                  <span  class="ml-2 mt-5px">Procceed to checkout</span>
                </button>
              </a>
          </div>
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
    computed: {
        ...mapGetters(['cartItem', 'isLoggedIn', 'cartValue','currentUser'])

    },
    methods: {
        ...mapActions(['saveCart']),
        ...mapMutations(['removeItem', 'updateCart']),
        changeNumber(item) {
            if (item.number > item.quantity) item.number = item.quantity
            if (item.number < 0) item.number = 1
            this.updateCart(item)

        },
        showToast() {
            this.$toast.open({
                message: "Removed Successfully",
                type: "error",
                duration: 2000,
                dissmissible: true,
                queue: false,
                position: "top-right"

            })
        },
        zeroCase(item) {
            if (item.number == 0) {
                this.showToast()
                this.removeItem(item)
            }
        },
         checkOut(){
          if(this.cartItem.length!==0)
              this.$router.push({name:'payment'})
          else this.$swal({
                      icon: 'error',
                      title: 'Your Cart Is Empty',
                      text: 'Please have at least one product in your Cart',
                      confirmButtonColor: 'rgba(31, 41, 55,0.8)'
                      })
        },
        checkLoggedIn(){
              if(!this.isLoggedIn) {
                     this.$swal({
                      title: 'You must be logged in to checkout',
                      showCancelButton: true,
                      showLoaderOnConfirm: true,
                      confirmButtonText: `Login`,
                      }).then((result) => {
                      if (result.value) {
                        this.$router.push({name:'login'})
                    }
                })
              }
              else 
                this.checkOut()
       },  
        removeItems(item){
          this.removeItem(item)
          this.saveCart({
                uid: this.currentUser.uid,
                cartListItem:this.cartItem
            })
          this.showToast()
        },      
  },
}
</script>

<style>

</style>
