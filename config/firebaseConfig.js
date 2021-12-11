import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyArh67ZDlUrtj5IDOW4Xmgojk5c-2eGuOI",
    authDomain: "vuemmerce.firebaseapp.com",
    databaseURL: "https://vuemmerce-default-rtdb.asia-southeast1.firebasedatabase.app",
  };

  firebase.initializeApp(firebaseConfig);
  
  export function firebaseListener(func){
      firebase.auth().onAuthStateChanged(
          function(user){
              if(user){
                  func(true,user)
              }
              else{
                func(false)
            }
          },
          function(err){
              console.log(err)
          }) 
        
}

export const ref = firebase.database().ref()

export const firebaseAuth = firebase.auth()

