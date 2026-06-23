

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
const signUpBtn=document.getElementById("signUpBtn")
signUpBtn.onclick=()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
const additionalInfo=getAdditionalUserInfo(result)
if(additionalInfo.isNewUser){
localStorage.clear()
localStorage.setItem("userID",user.uid)
localStorage.setItem("userName",user.displayName)
localStorage.setItem("userEmail",user.email)
const localData={
userID:localStorage.getItem("userID"),
userName:localStorage.getItem("userName"),
userEmail:localStorage.getItem("userEmail")
}
fetch("/dbUpdateUser",{
method:"post",
headers:{"Content-type":"application/json"},
body:JSON.stringify(localData)

}).then((res)=>{
return res.json()
}).then((data)=>{
console.log(data)
})
window.location.href="./dashboard.html"
}else if(!additionalInfo.isNewUser){
alert("the user is already registered please sign in again")
}

}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

}