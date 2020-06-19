var router =require('express').Router(),
    resumeController=require('../controller/resume'),
    verifyUser=require('../controller/verify');


    

router.get('/userinfo/',verifyUser.verifyToken,resumeController.getUserInfo)
router.post('/userinfo/',verifyUser.verifyToken,resumeController.setUserInfo)

router.get('/educationinfo/',verifyUser.verifyToken,resumeController.getEducationInfo)
router.post('/educationinfo/',verifyUser.verifyToken,resumeController.setEducationInfo)
router.get('/educationinfo/delete/:education_id',verifyUser.verifyToken,resumeController.deleteEducationInfo)

router.get('/experianceinfo/',verifyUser.verifyToken,resumeController.getExperianceInfo)
router.post('/experianceinfo/',verifyUser.verifyToken,resumeController.setExperianceInfo)
router.get('/experianceinfo/delete/:experiance_id',verifyUser.verifyToken,resumeController.deleteExperianceInfo)



router.get('/projectinfo/',verifyUser.verifyToken,resumeController.getProjectInfo)
router.post('/projectinfo/',verifyUser.verifyToken,resumeController.setProjectInfo)
router.get('/projectinfo/delete/:project_id',verifyUser.verifyToken,resumeController.deleteProjectInfo)



module.exports=router;