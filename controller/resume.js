var db=require('../dbConfig')




exports.getUserInfo=(req,res,next)=>{
    var email=req.user.email;
    db.execute('Select * from user  where email=?',[email])
    .then(
        ep=>{
            res.json({user:ep[0][0]})
            next();
        }
    ).catch(err=>{
        console.log(err);
        res.status(401).json({message:err.message,code:err.code})
        next(err);
    })
}
exports.setUserInfo=(req,res,next)=>{
    console.log(req.body)
       var {mobile,linkedIn,introduction,name}=req.body;
       var email=req.user.email;
       console.log(email)
       db.execute('update `user` set `mobile`=? ,`linkedIn`=?,`introduction`=?,`name`=? where `email`=?',[mobile,linkedIn,introduction,name,email])
       .then(user=>{
            res.status(200).json({message:"User Information updated"})
            next();

       })
       .catch(
           err=>{
               res.status(401).json({message:err.message,code:err.code})
               next();
           }
       )

}
exports.setEducationInfo=(req,res,next)=>{
    
    console.log(req.user)
    var {school,grade,title}=req.body;
    var user_email=req.user.email;
    db.execute('insert into `education` (school,grade,user_email,title) values (?,?,?,?)',[school,grade,user_email,title])
    .then(user=>{
         res.status(200).json({message:"Added data for Education."})
         next();

    })
    .catch(
        err=>{
            res.status(401).json({message:err.message,code:err.code})
            next();
        }
    )
}
exports.getEducationInfo=(req,res,next)=>{
    var email=req.user.email;
    console.log(email)
    db.execute('Select * from `education`  where user_email=?',[email])
    .then(
        ep=>{
            res.json({education:ep[0]})
            next();
        }
    ).catch(err=>{
        console.log(err);
        res.status(401).json({message:err.message,code:err.code})
        next(err);
    })
}

exports.setExperianceInfo=(req,res,next)=>{
    
// experiance{
//     job_title,
//     start_date,
//     end_date,
//     details,
//     user_email
//     }
    console.log(req.user)
    var {   job_title,start_date,end_date,details}=req.body;
    var user_email=req.user.email;
    db.execute('insert into `experiance` (job_title,start_date,end_date,details,user_email) values (?,?,?,?,?)',[job_title,start_date,end_date,details,user_email])
    .then(user=>{
         res.status(200).json({message:"Added data for Experiance."})
         next();

    })
    .catch(
        err=>{
            res.status(401).json({message:err.message,code:err.code})
            next();
        }
    )
}
exports.getExperianceInfo=(req,res,next)=>{
    var email=req.user.email;
    console.log(email)
    db.execute('Select * from `experiance`  where user_email=?',[email])
    .then(
        ep=>{
            res.json({experiance:ep[0]})
            next();
        }
    ).catch(err=>{
        console.log(err);
        res.status(401).json({message:err.message,code:err.code})
        next(err);
    })
}


exports.setProjectInfo=(req,res,next)=>{
        console.log(req.user)
        // project{
        //     title,
        //     description,
        //     user_email
        //     }
        var {title,description}=req.body;
        var user_email=req.user.email;
        db.execute('insert into `project` (title,description,user_email) values (?,?,?)',[title,description,user_email])
        .then(user=>{
             res.status(200).json({message:"Added data for Project."})
             next();
    
        })
        .catch(
            err=>{
                res.status(401).json({message:err.message,code:err.code})
                next();
            }
        )
    }
    exports.getProjectInfo=(req,res,next)=>{
        var email=req.user.email;
        console.log(email)
        db.execute('Select * from `project`  where user_email=?',[email])
        .then(
            ep=>{
                res.json({projects:ep[0]})
                next();
            }
        ).catch(err=>{
            console.log(err);
            res.status(401).json({message:err.message,code:err.code})
            next(err);
        })
    }
    

exports.getMyRecipe=(req,res,next)=>{
    console.log(req.user);
    db.execute('Select * from recipe, user where User_email=email and email = ?' ,[req.user.email])
    .then(
        ep=>{
            res.json(ep[0])
            next();
        }
    ).catch(err=>{
        console.log(err);
        next(err);
    })
}