const mongoose =require("mongoose")
const dbUserData=require("../model/userSchima")
const dbFetchUser=(req,res)=>{
res.send(req.body)
}
module.exports=dbFetchUser