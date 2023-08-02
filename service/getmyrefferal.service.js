const usermodels=require('../models/usermodel')


class refservice{
static async checkmyreferralCode(id)
{
    try{
        return await usermodels.findOne({_id:id},{myreferalCode:1})
    }
    catch(err)
    {
        console.log(err);
    }
}
    }
    
    module.exports=refservice