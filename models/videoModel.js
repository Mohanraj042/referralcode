const mongo=require("mongoose")
const schema=mongo.Schema

const videoschema=new schema({
    user_Id:{
        type:schema.Types.ObjectId,
        ref:"userdata"
        },
    url:{
        type:"string",
        required:true
    },
    contentType:{
        type:"string",
        required:true
    },
    title:{
        type:"string",
    },
    desc:{
        type:"string"
    },
},
{timestamps:true})

const videomodel=mongo.model('earnvideo',videoschema)
module.exports=videomodel
