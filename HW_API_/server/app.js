const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get('/user',(req,res)=>{
    res.json({name:req.query.name,message: "Welcome in my node page"});})
app.post('/user/noor',(req,res)=>{
    res.json({name:req.body.name , message:req.body.massage});})
app.get('/user/noor',(req,res)=>{
    res.json({message: "Welcome in my node page"});
})



//write your code 
app.get('/user',(req,res)=>{
    res.json({name:"taymaa"});
})


app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

