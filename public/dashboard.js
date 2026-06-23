fetch("/dbFetchUser",{
method:"post",
headers:{"Content-type":"text/plain"},
body:localStorage.getItem("userID")

}).then((res)=>{
return res.text()
}).then((data)=>{
console.log(data)
})

const toggle = document.getElementById('status-toggle');
const label = document.getElementById('toggle-label'); 
toggle.addEventListener('click', function() {
label.textContent = this.checked ? 'On' : 'Off';})