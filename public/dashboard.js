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
fetch("/dbFetchUser",{
method:"post",
headers:{"Content-type":"application/json"},
body:localData.userID

}).then((res)=>{
return res.text()
}).then((data)=>{
console.log(data)
})

const toggle = document.getElementById('status-toggle');
const label = document.getElementById('toggle-label'); 
toggle.addEventListener('click', function() {
label.textContent = this.checked ? 'On' : 'Off';})