const state={
    productList:[
            
    ],
}

const mutations={
        updateProductList(state,productList){
            state.productList=productList
            state.isLoading=false
        },
        

    }

const actions={
    
}

const getters ={
    products:(state)=>{
        return state.productList
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}