const earnvideo=require("../models/videoModel")
const userModel=require('../models/usermodel')

class vmodel{
    static async uploadvideo(user_Id,url,contentType,title,desc)
    {
        try{
            const create = await earnvideo.create({user_Id,url,contentType,title,desc})
            return create
            
        }
        catch(err)
        {
            console.log(err);
        }
     }

static async pushvideo(user_Id,vid)
    
    {
        try {
            return await userModel.updateMany(
          { _id:user_Id},
          {$push:{myVideo:vid}},
          { returnOriginal: true }
          
        )}
            
    catch(err)
        {
      console.log(err);
        }
    }   
    static async allvideo()
    
    {
        try {
            return await earnvideo.find({},{url:1,_id:0})
        }
    catch(err)
        {
      console.log(err);
        }
    }   
     static async uservideo(id)
    {
        try {
            return await earnvideo.find({user_Id:id},{url:1,_id:0})
        }
    catch(err)
        {
      console.log(err);
        }
    }   
 }

module.exports=vmodel
