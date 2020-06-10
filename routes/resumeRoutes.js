var router =require('express').Router(),
    resumeController=require('../controller/resume'),
    verifyUser=require('../controller/verify');


    

router.get('/userinfo/',verifyUser.verifyToken,resumeController.getUserInfo)
router.post('/userinfo/',verifyUser.verifyToken,resumeController.setUserInfo)

router.get('/educationinfo/',verifyUser.verifyToken,resumeController.getEducationInfo)
router.post('/educationinfo/',verifyUser.verifyToken,resumeController.setEducationInfo)

router.get('/experianceinfo/',verifyUser.verifyToken,resumeController.getExperianceInfo)
router.post('/experianceinfo/',verifyUser.verifyToken,resumeController.setExperianceInfo)

router.get('/projectinfo/',verifyUser.verifyToken,resumeController.getProjectInfo)
router.post('/projectinfo/',verifyUser.verifyToken,resumeController.setProjectInfo)

module.exports=router;