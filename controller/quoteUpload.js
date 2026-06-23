const mongoose=require("mongoose")
const UserIDModel=require("../model/userSchima")
const quoteUpload=async(req,res)=>{
const userData=await UserIDModel.find({})
for (const key in userData) {
   const user=await UserIDModel.findOne({userID: userData[key].userID})
    user.quoteHistory.push(req.body)
await user.save()

}

res.send(req.body)
}
module.exports=quoteUpload