const state={
    comment:[

    ]
}

const mutations={
    updateComment(state,comment){
        state.comment=comment
    }
}

const actions={
   
}   

const getters={
    comments:(state)=>{
        return state.comment
    },


}

export default {
    state,
    mutations,
    actions,
    getters
}