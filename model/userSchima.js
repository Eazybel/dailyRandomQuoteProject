const { text, express } = require("express")
const mongoose=require("mongoose")

const user=new mongoose.Schema({
userID:{
type:String,
required:true,
unique:true,
trim:true
},
userName:{
type:String,
required:true,
trim:true
},
userEmail:{
type:String,
required:true,
unique:true,
trim:true
}
})
const UserID=new mongoose.model("userID",user,)
module.exports=UserID