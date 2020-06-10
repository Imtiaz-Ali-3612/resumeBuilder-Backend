var config=require('../config'),
jwt=require('jsonwebtoken');

exports.verifyToken=(req,res,next)=>{
    console.log(req.headers);
    var token=req.headers.token;
    jwt.verify(token, config.secretKey, function(err, user) {
        if(err){
            console.log(err)
            res.json('token verification failed')
            next(err);
        }else{
            req.user=user;
            console.log(req.user)
            console.log('token Verified')
            next();
        }
    });    
}
