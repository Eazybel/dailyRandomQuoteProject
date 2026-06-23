const mongoose=require("mongoose")
const UserIDModel=require("../model/userSchima")
const quoteUpload=async(req,res)=>{
const userData=await UserIDModel.find({})
for (const key in userData) {
    console.log(key)
}
res.send(userData)

}
module.exports=quoteUpload