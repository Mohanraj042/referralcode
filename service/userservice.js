const usermodels = require('../models/usermodel');
const tokengen=require('jsonwebtoken')
class userservice
    {
    static async registeruser(Mobilenumber,Fullname,Email,ReferralCode,myreferalCode){
try{
    const create = await usermodels.create({Mobilenumber,Fullname,Email,ReferralCode,myreferalCode})
    return create
}
catch(err)
{
    console.log(err);
}
    }
static async checkuser(Mobilenumber)
{
    try{
        return await usermodels.findOne({Mobilenumber})
    }
    catch(err)
    {
        console.log(err);
    }
}
static async generatetoken(tokendata,key)
{
    try{
        return await tokengen.sign(tokendata,key,{expiresIn:'1Y'})
    }
    catch(err)
    {
        console.log(err);
    }
}
static generate(length) 
{     
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result = '';
    for (let i = 0; i < length; i++) 
    {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
return  result;
}
    }
    
    module.exports=userservice;