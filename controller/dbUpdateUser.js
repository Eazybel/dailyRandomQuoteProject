const mongoose=require("mongoose")
const userIDModel=require("../model/userSchima")
const dbUpdateUser=(req,res)=>{
// CONTINUE FROM HERE BY CONNECTING THE MODEL TO THE DATABASE
const userData= new userIDModel({
userID:req.body.userID,
userName:req.body.userName,
userEmail:req.body.userID
})

userData.save()
.then(()=>{
  res.json(req.body)
}).catch(err=>{
console.log("err")
})
}
module.exports=dbUpdateUser