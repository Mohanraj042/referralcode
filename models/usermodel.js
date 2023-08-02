const mongoose=require('mongoose')
const schema=mongoose.Schema
const userschema=new schema
({
   Mobilenumber:{
        type:"string",
        required:true
    }, 
     Fullname:{
        type:"string",
        required:true
    },
    Email:{
            type:"string",
            required:true,
            unique:true,
            lowercase:true
        },
    ReferralCode:{
            type:"string"
        },
    myreferalCode:{
            type:"string"
        },
    myVideo:{
        type:Array
    }      
})
const usermodels=mongoose.model('userdata',userschema)
module.exports=usermodels;
