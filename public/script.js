

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAJYAzgVhQKXM_UgGn_jE4BchhdCLHeDV8",
    authDomain: "randomquotes-15f2b.firebaseapp.com",
    projectId: "randomquotes-15f2b",
    storageBucket: "randomquotes-15f2b.firebasestorage.app",
    messagingSenderId: "950884323978",
    appId: "1:950884323978:web:6a2ec2de5af53408611373"
  };

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
const signInGooglebtn=document.getElementById("signInGooglebtn")
signInGooglebtn.onclick=()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    const additionalInfo=getAdditionalUserInfo(result)
const userData={
    userName:user.displayName,
    userID:user.uid,
    userEmail:user.email
}
localStorage.setItem("userData",userData)
    window.location.href="./dashboard.html"
console.log(localStorage.getItem("userData"))

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

}