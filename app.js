var express=require('express'),
    bodyParser=require('body-parser'),
    config=require('./config'),
    jwt=require('jsonwebtoken');


var resumeRoutes=require('./routes/resumeRoutes'),
    userRoutes=require('./routes/user');

var app =express();
app.use(bodyParser.json())

app.use('/user',userRoutes);

app.use('/resume',resumeRoutes);

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})



