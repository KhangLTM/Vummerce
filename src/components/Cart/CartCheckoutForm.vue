
<template>
<form 
    @submit.prevent="checkout"
    class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style="max-width: 600px">
        <div class="w-full pt-1 pb-5">
            <div class="bg-gray-800 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <i class="fas fa-credit-card fa-2x"></i>
            </div>
        </div>
        <div class="mb-10">
            <h1 class="text-center font-bold text-xl uppercase">Secure payment info</h1>
        </div>
        <div class="mb-3 flex -mx-2">
            <div class="px-2">
                <label for="type1" class="flex items-center cursor-pointer">
                    <input type="radio" class="form-radio h-5 w-5 text-gray-800" name="type" id="type1" checked>
                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3 object-fit">
                </label>
            </div>
            <div class="px-2 hidden md:block">
                <label for="type2" class="flex items-center cursor-pointer">
                    <input type="radio" class="form-radio h-5 w-5 text-gray-800" name="type" id="type2">
                    <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" class="h-8 ml-3">
                </label>
            </div>
        </div>
        <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
                <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-800 transition-colors" placeholder="John Smith" type="text" required/>
            </div>
        </div>
        <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
                <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-800 transition-colors" placeholder="0000 0000 0000 0000" type="text" required/>
            </div>
        </div>
        <div class="mb-3 -mx-2 flex items-end">
            <div class="px-2 w-2/3">
                <label class="font-bold text-sm mb-2 ml-1 ">Expiration date</label>
                <div>
                    <select class="text-sm md:text-md form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-800 transition-colors cursor-pointer">
                        <option value="01">01 - January</option>
                        <option value="02">02 - February</option>
                        <option value="03">03 - March</option>
                        <option value="04">04 - April</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - June</option>
                        <option value="07">07 - July</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                    </select>
                </div>
            </div>
            <div class="px-2 w-1/3">
                <select class="text-sm md:text-md form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-800 transition-colors cursor-pointer">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                </select>
            </div>
        </div>
        <div class="flex justify-between flex-wrap mb-10">
            
            <div class="flex flex-col ">
                <label  class="font-bold text-sm mb-2 ml-1">Security code</label>
                <input class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-800 transition-colors" placeholder="000" type="text" required/>
            </div>
            <div class=" text-2xl  font-bold  mt-8 lg:mr-10" >
                Your Total Cart : {{cartValue}} $
            </div>
        </div>
        
        <div>
            
            <button @click="checkout()" type="button" class="block w-full text-xl py-2 max-w-xs mx-auto  hover:bg-gray-800 hover:text-white focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-gray-900 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                   Pay Now
            </button>
            
        </div>
    </div>
</form>


</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    computed:mapGetters(['cartValue','currentUser','cartItem']),
    methods:{
        
        ...mapActions(['removeCart','saveCart']),
        
        checkout(){
            this.removeCart()
            this.saveCart({
                uid: this.currentUser.uid,
                cartListItem:''
            })
              this.$swal({
                    icon: 'success',
                    title: 'Your have bought all products',
                    showConfirmButton: false,
                    timer: 2000
                })
            setTimeout(()=>{
                this.$router.push({name:'mainpage'})
            },2500)
        }
    }
}
</script>

<style>
.form-radio {
  
  appearance: none;
  color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  
          user-select: none;
  flex-shrink: 0;
  border-radius: 100%;
  border-width: 2px;
}

.form-radio:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media not print {
  .form-radio::-ms-check {
    border-width: 1px;
    color: transparent;
    background: inherit;
    border-color: inherit;
    border-radius: inherit;
  }
}

.form-radio:focus {
  outline: none;
}

.form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e");
  appearance: none;
  color-adjust: exact;
  background-repeat: no-repeat;
  padding-top: 0.5rem;
  padding-right: 2.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
}

.form-select::-ms-expand {
  color: #a0aec0;
  border: none;
}

@media not print {
  .form-select::-ms-expand {
    display: none;
  }
}

@media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none) {
  .form-select {
    padding-right: 0.75rem;
  }
}
</style>