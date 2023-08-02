const userctrl = require('../controller/usercontroller');
const myref=require('../controller/getmyrefferal.con')
const video=require("../controller/videoController")
const express = require("express");
const router = express.Router();
router.post('/register',userctrl.register);
router.post('/login',userctrl.login);
router.post('/verify',userctrl.verify);

router.post('/myref',myref.getcode)
module.exports = router;



router.post('/upload',video.uploadvideo)
router.get('/allvideos',video.allvideos)
router.post('/uservideos',video.uservideos)