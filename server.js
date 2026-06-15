const express=require("express")
const mongoose=require("mongoose")
const dbServerController=require("./controller/dbUpdateUser")
const app=express()
const path=require("path")

//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())
app.use(express.text())
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  next();
});

// database connection
mongoose.connect("mongodb+srv://eazybel27_db_user:rRvtwsChiKvVum45@randomquote.fjtlhqq.mongodb.net/?appName=randomQuote").then(()=>
console.log("DB CONNECTED")
).catch((err)=>{
console.log(err)
})

// controller requests
app.get("/", (req, res)=>{
res.sendFile(path.join(__dirname,"public/index.html"))
})
app.post("/dbUpdateUser", dbServerController)

// server innitiation
app.listen(5000,()=>{
console.log("server listning to port 5000")
})
