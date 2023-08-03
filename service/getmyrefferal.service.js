const usermodels=require('../models/usermodel')


class refservice{
static async checkmyreferralCode(id)
{
    try{
        return await usermodels.findOne({_id:id},{myreferalCode:1,_id:0})
    }
    catch(err)
    {
        console.log(err);
    }
}
    }
    
    module.exports=refservice