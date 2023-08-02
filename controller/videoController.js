const videoservice=require("../service/videoService")

const uploadvideo=async (req,res)=>
{
const{user_Id,url,contentType,title,desc}=req.body

const up= await videoservice.uploadvideo(user_Id,url,contentType,title,desc)
const vid=up.id

console.log(vid);
// console.log(up.user_Id); //.. register user id
//res.json(up)
const add =await videoservice.pushvideo(user_Id,vid)
res.send(add)

}

const allvideos=async (req,res)=>{
    const videos=await videoservice.allvideo();
    res.send(videos)
}
const uservideos=async (req,res)=>{
    const{id}=req.body
    const videos=await videoservice.uservideo(id);
    res.send(videos)
}


module.exports={uploadvideo,allvideos,uservideos}