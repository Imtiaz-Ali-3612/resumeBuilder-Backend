var db=require('../dbConfig'),
 config=require('../config'),
 jwt=require('jsonwebtoken')

exports.signupUser=(req,res,next)=>{
    var {email,password} = req.body;
    db.execute('insert into user (email,password) values (?,?)',[email,password]).then(
        user=>{
            console.log('user is created',user)
            res.status(200).json({message:'user created'})
            next()
        }
    ).catch(err=>{
        res.status(510).json({message:err.message,code:err.code})
         
        console.log(err);
        next(err)
    })

}
exports.loginUser=(req,res,next)=>{
    var {email,password}=req.body;
    console.log(email)
    db.execute('select * from `user` where email= ? ',[email])
    .then(user=>{
        var userData=user[0][0];
        if(userData){
            if(userData.password==password){
                var user={
                    email:userData.email,
                }
                console.log(user)
                jwt.sign(user,config.secretKey,(err,usertoken)=>{
                    if(err){
                        next(err);
                        res.json({error:true,message:"ERROR OCCURED"})
                        return;
                    }
                    console.log(usertoken)
                    res.json({error:false,message:'logged in successful',usertoken:usertoken})
                    next();
                })

            }else{
                res.status(509).json({error:true,message:'Password is incorrect'})
                next();
            }
        }else {
            res.status(404).json({error:true,message:'user not found'})
            next();
        }
    }).catch(
        err=>{ 
            res.status(509).json({error:true,message:err.message})
            next(err) }
    )

}


