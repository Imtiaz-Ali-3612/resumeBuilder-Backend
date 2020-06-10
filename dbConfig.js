var mysql=require('mysql2')


var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    database:"resumebuilder",
    password:"fast3612"
});

module.exports=pool.promise();