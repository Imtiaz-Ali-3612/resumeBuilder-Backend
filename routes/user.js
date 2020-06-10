var router =require('express').Router(),
    userController=require('../controller/user')


router.post('/signup',userController.signupUser)
router.post('/login',userController.loginUser)



module.exports=router;