import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res => {
      const {displayName, email } = res.user;
      const signInUser = {name: displayName, email}
      return signInUser;
    })
    .catch(err => console.log(err))  
}

//FB logging
export const handleFBLogIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
        const token = result.credential.accessToken;
        const user = result.user;
        user.isSuccess =  true;
        return user;

    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        
    });
}

export const createUserWithEmailPassword = (email, password) => {
    
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo = res.user;
    //   updateUserName(name);
      return newUserInfo;
    })
    .catch(error => {
      // Handle Errors here.
      const newUserInfo = {}
      return newUserInfo;
    });
}

export const logInUserWithEmailPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo = res.user;
      return newUserInfo;

    })
    .catch(error => {
      const newUserInfo = {}
      return newUserInfo;    
    })
}

// const updateUserName = name => {

//     const user = firebase.auth().currentUser;

//     user.updateProfile({
//       displayName: name,
//     }).then(function() {
//       // Update successful.
//     }).catch(function(error) {
//       // An error happened.
//     });

// }
