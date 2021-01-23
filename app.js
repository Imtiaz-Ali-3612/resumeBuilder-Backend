var express=require('express'),
    bodyParser=require('body-parser'),
    config=require('./config'),
    jwt=require('jsonwebtoken'),
     fs = require('fs');
    


var resumeRoutes=require('./routes/resumeRoutes'),
    userRoutes=require('./routes/user');

var app =express();
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('<div><h1>Welcome To the Resume Builder App Back-End</h1><br> <i>contact: imtiaz.ali.3612@gmail.com</i></div>')
})
function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
    
}
app.get('/retrieve-img',(req,res)=>{
    let files={
        file1:{
            name:"item1",
            brand:"brand1",
            path:"./images/1.jpg",
            ContentType:"jpg"
        },
        file2:{
            name:"item2",
            brand:"brand2",
            path:"./images/2.jpeg",
            ContentType:"jpeg"

        },
        file3:{
            name:"item3",
            brand:"brand3",
            path:"./images/3.png",
            ContentType:"png"

        },
        file4:{
            name:"item4",
            brand:"brand4",
            path:"./images/4.jpeg",
            ContentType:"jpeg"

        },
        file5:{
            name:"item5",
            brand:"brand5",
            path:"./images/5.jpg",
            ContentType:"jpg"

        }
    }
   let randomImage=files["file"+(Math.floor(Math.random() * 5+1))]
    let bas64='data:image/'+randomImage.ContentType+';base64,'+ base64_encode(randomImage.path) 
    
    randomImage.path=bas64
    res.send(randomImage)
})

app.use('/user',userRoutes);

app.use('/resume',resumeRoutes);

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log("Server is running on 3000");
})



