const state={
    productList:[
            
    ],
    sortedProducts:[

    ],
    searchProd:"",
    isSearchs:"",
    isSorts:false
}

const mutations={
        updateProductList(state,productList){
            state.productList=productList
        },
        setSearchProduct(state,value){
             state.searchProd=value.productTitle.toLowerCase()
             state.isSearchs=value.boolean
        },
        sortByPrice(state,data){
            state.isSorts=data.boolean
            if(data.sort=='sortUp')
                state.sortedProducts=state.productList.slice().sort((a,b)=>a.price-b.price)
            else state.sortedProducts=state.productList.slice().sort((a,b)=>b.price-a.price)
    
        },
        

    }

const actions={
    
}

const getters ={
    products:(state)=>{
        return state.productList
    },
    sortedProduct:(state)=>{
        return state.sortedProducts
    },
    titleSearch:(state)=>{
        let productSearch=state.productList.filter(prod=>prod.title.toLowerCase().indexOf(state.searchProd)>-1)
        return productSearch
    },
    isSearch:(state)=>{
        return state.isSearchs
    },
    isSort:(state)=>{
        return state.isSorts
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}