var db=require('../dbConfig')




exports.getUserInfo=(req,res,next)=>{
    var email=req.user.email;
    db.execute('select * from user  where email=?',[email])
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
    var {school,grade,title,from,to}=req.body;
    var user_email=req.user.email;
    db.execute('insert into `education` (`school`,`grade`,`user_email`,`title`,`from`,`to`) values (?,?,?,?,?,?)',[school,grade,user_email,title,from,to])
    .then(user=>{
         console.log('added info')
         res.status(200).json({message:"Added data for Education."})
         next();

    })
    .catch(
        err=>{
            res.status(401).json({message:err.message,code:err.code})
            next(err);
        }
    )
}
exports.getEducationInfo=(req,res,next)=>{
    var email=req.user.email;
    console.log(email)
    db.execute('select * from `education`  where user_email=?',[email])
    .then(
        ep=>{
            res.status(200).json({education:ep[0]})
            next();
        }
    ).catch(err=>{
        console.log(err);
        res.status(401).json({message:err.message,code:err.code})
        next(err);
    })
}
exports.deleteEducationInfo=(req,res,next)=>{
    var education_id=req.params.education_id;
    console.log('deleting :' ,education_id)
    db.execute('delete from education where education_id =?',[education_id])
    .then(
        ep=>{
            res.status(200).json({message:'Deleted Successfully'});
            next();
        }
    ).catch(
        err=>{
            res.status(401).json({message:err.message,code:err.code})
            next();
        }
    )
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
    var {   job_title,from,to,details}=req.body;
    var user_email=req.user.email;
    db.execute('insert into `experiance` (`job_title`,`from`,`to`,`details`,`user_email`) values (?,?,?,?,?)',[job_title,from,to,details,user_email])
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
    db.execute('select * from `experiance`  where user_email=?',[email])
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
exports.deleteExperianceInfo=(req,res,next)=>{
    var experiance_id=req.params.experiance_id;
    console.log('deleting :' ,experiance_id)
    db.execute('delete from experiance where experiance_id =?',[experiance_id])
    .then(
        ep=>{
            res.status(200).json({message:'Deleted Successfully'});
            next();
        }
    ).catch(
        err=>{
            res.status(401).json({message:err.message,code:err.code})
            next();
        }
    )
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
        db.execute('select * from `project`  where user_email=?',[email])
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
    

    exports.deleteProjectInfo=(req,res,next)=>{
        var project_id=req.params.project_id;
        console.log('deleting :' ,project_id)
        db.execute('delete from project where project_id =?',[project_id])
        .then(
            ep=>{
                res.status(200).json({message:'Deleted Successfully'});
                next();
            }
        ).catch(
            err=>{
                res.status(401).json({message:err.message,code:err.code})
                next();
            }
        )
    }
    