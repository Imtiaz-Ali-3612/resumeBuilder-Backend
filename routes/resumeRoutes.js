var router =require('express').Router(),
    resumeController=require('../controller/resume'),
    verifyUser=require('../controller/verify');


    

router.get('/userinfo/',verifyUser.verifyToken,resumeController.getUserInfo)
router.post('/userinfo/',verifyUser.verifyToken,resumeController.setUserInfo)


module.exports=router;