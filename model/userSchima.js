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
const UserIDModel=new mongoose.model("UserIDModel",user,)
module.exports=UserIDModel