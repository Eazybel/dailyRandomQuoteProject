const mongoose=require("mongoose")
const UserIDModel=require("../model/userSchima")
const quoteUpload=(req,res)=>{
const userData=UserIDModel.findOne({userID:})
res.send(req.body)

}
module.exports=quoteUpload