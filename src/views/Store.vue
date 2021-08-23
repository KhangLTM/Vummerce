<template>
<div>
    <Loading v-show="isLoad" />
    <Slide v-show="!isSearch" />
    <span v-show="!isSearch" class="hidden lg:flex w-30 justify-end mt-8 mr-8 ">
            <select @change="selectSort" >
                <option disabled>---Sorting Product---</option>
                <option value="">No sort</option>
                <option value="sortUp"> Sort by price up</option>
                <option value="sortDown"> Sort by price down</option>
            </select>
            
            <!-- <button class="px-10 " @click="sortByPriceUp">Sort by price up </button>
            <button class="px-10 " @click="sortByPriceDown">Sort by price down </button> -->
    </span>
    <div class="py-5 bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  place-items-center lg:auto-rows-max	">
        <product-item v-for="prop in product" :key="prop.id" :items="prop" />
    </div>
   
    <cant-find v-show="checkFind" />
</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex'
import ProductItem from '../components/Products/ProductItem.vue'
import Slide from '../views/Slide.vue'
import cantFind from '../components/Products/cantFind.vue'
import Loading from '../views/Loading.vue'
export default {
    components: {
        ProductItem,
        Slide,
        cantFind,
        Loading

    },
    computed: {
        ...mapGetters(['isSort','sortedProduct','products', 'titleSearch', 'isSearch','isLoad']),
        product: function () {
            if(!this.isSort){ 
                if (!this.isSearch)
                    return this.products
                else  return this.titleSearch
            }
            else return this.sortedProduct
       },
        checkFind: function () {
            if (this.isSearch && this.titleSearch.length === 0)
                return true
            else return false
        },
       
       
    },
    methods: {
        ...mapActions(['getProductList']),
        ...mapMutations(['sortByPrice']),
        selectSort(e){
            let value= e.target.value  
            switch(value){
                case "sortUp":
                    this.sortByPrice({sort:"sortUp",boolean:true}) 
                    break;
                case "sortDown":
                    this.sortByPrice({sort:"sortDown",boolean:true}) 
                    break;
                default:
                    this.sortByPrice({sort:"",boolean:false})
            }
        } 
    },
    created() {
        this.getProductList()
        
    },
     
    

}
</script>

<style>

</style>
