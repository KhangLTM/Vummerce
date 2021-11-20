<template>
<div class='bgcolor'>
    <Loading v-if="isLoad" />
    <div v-else>
        <Slide/>
        <span  class=" sort hidden lg:flex w-30  justify-end mt-7   ">
        </span>
    <h1  class="store text-3xl  font-bold lg:block hidden pt-5"><i class="fab fa-apple"></i> MACBOOK</h1>
    
    
    <div class="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  place-items-center lg:auto-rows-max	">
            <product-item v-for="prop in products" :key="prop.id" :items="prop" />
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
import ProductItem from '../components/Products/ProductItem.vue'
import Slide from '../views/Slide.vue'
import Loading from '../views/Loading.vue'
export default {
    components: {
        ProductItem,
        Slide,
        Loading

    },
    data(){
        return{
            isLoad:true
        }
    },
    computed: {
        ...mapGetters(['products', 'titleSearch', 'isSearch']),
       
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
        setTimeout(()=>{
            this.isLoad=false
          },800)
    },
     
    

}
</script>

<style scoped>
    .store{
        margin-left:65px;
        margin-top:-25px
    }
    .sort{
        margin-right: 70px;
    }
    .bgcolor{
        background-color: rgba(255, 255, 255, 0.938);
    }

</style>
