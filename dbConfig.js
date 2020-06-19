var mysql=require('mysql2')


var pool = mysql.createPool({
    host:"sql12.freemysqlhosting.net",
    user:"sql12349576",
    database:"sql12349576",
    password:"syzSUAIa4a"
});

module.exports=pool.promise();