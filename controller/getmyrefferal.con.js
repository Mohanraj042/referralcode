const getmyservice=require('../service/getmyrefferal.service')
const getcode=async(req,res)=>{
    const {id}=req.body
    const code=await getmyservice.checkmyreferralCode(id)
    res.json(code)
}
module.exports = {getcode}