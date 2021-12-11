const state ={
    cartItemList:[]
}

const getters ={
    cartItem:(state)=>{
        return state.cartItemList.flat(Infinity)
    },
    cartValue:(state)=>{
        let res=0
        for(let item of state.cartItemList.flat(Infinity)){
             res+=item.price*item.number
        }
        return res
    }
}

const mutations ={
    updateCart(state,data){
        let record=state.cartItemList.flat(1).find(prod=>{
                
                return prod.id===data.id
        })
        if(record) 
        {    
             record.number=data.number
             record.NewPrice=data.price*data.number
        }
        else{
                state.cartItemList.push(data)   
        }
    },
    setCart(state,productList){
        state.cartItemList=productList
    },
    
    removeItem(state,item){
        let flat=state.cartItemList.flat(1)
        for(let prod of flat){
            if(prod.id===item.id){
                flat.splice(flat.indexOf(prod),1)
                state.cartItemList=flat
                break;
            }
        }

    },

}

const actions ={
    removeCart({commit}){
        commit('setCart',[])
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}