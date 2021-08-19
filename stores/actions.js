
import {ref,firebaseAuth} from "../config/firebaseConfig"

export function registerByEmail(_,{email,password,username}){
        return firebaseAuth.createUserWithEmailAndPassword(email,password)
        .then(function() {
            let user=firebaseAuth.currentUser
            return user.updateProfile({
                displayName:username
            })
          }).catch(function(error) {
            console.log(error);
          });
    }

export function loginWithEmail(_,{email,password}){
    return firebaseAuth.signInWithEmailAndPassword(email,password)
    }

export function logOut(){ 
        firebaseAuth.signOut();
    }
   
export function getProductList({commit}){
        return ref.child('Products').on('value',(Products)=>{
            commit('updateProductList',Products.val())
        })
    }

export function saveCart(_,user){
    return ref.child("Cart").child(`${user.uid}`).set(user.cartListItem)
}   
export function getCart({commit},data){
        return ref.child(`Cart/${data.uid}`).once('value').then((cart)=>{
                if(cart.val() && !data.currentCart.length)
                    commit('updateCart',cart.val())  
                else commit('setCart',data.currentCart)
            })
    
    }

