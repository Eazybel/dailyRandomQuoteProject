const mongoose =require("mongoose")
const dbUserData=require("../model/userSchima")
const dbFetchUser=async(req,res)=>{
const user= await dbUserData.findOne({userID:req.body})
res.send(user)
}
module.exports=dbFetchUser