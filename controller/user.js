var db=require('../dbConfig'),
 config=require('../config'),
 jwt=require('jsonwebtoken')

exports.signupUser=(req,res,next)=>{
    var {email,password} = req.body;
    db.execute('insert into User (email,password) values (?,?)',[email,password]).then(
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
    db.execute('select * from `User` where email= ? ',[email])
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
                        res.json("ERROR OCCURED")
                        return;
                    }
                    console.log(usertoken)
                    res.json({message:'logged in successful',usertoken:usertoken})
                    next();
                })

            }else{
                res.json('Password is incorrect')
                next();
            }
        }else {
            res.json('user not found')
            next();
        }
    }).catch(
        err=>{ next(err) }
    )

}


