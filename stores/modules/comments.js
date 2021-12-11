const state={
    comment:[

    ],
    commentsToShow:3,

}

const mutations={
    updateComment(state,comment){
        state.comment=[]
        for(const com in comment) {
            state.comment.push({
              username: comment[com].name,
              comment: comment[com].comment,
              time: comment[com].time,
            })
    }
    },

    loadMoreCom(state,count){
        state.commentsToShow+=count
    },
    hideCom(state,count){
        state.commentsToShow=count
    }

}
const actions={
   
}   

const getters={
    comments:(state)=>{
        return state.comment.reverse()
    },
    numberCom:(state)=>{
        return state.commentsToShow
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}