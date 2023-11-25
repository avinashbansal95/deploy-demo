const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
    res.json({status:"ok",message:"Root page"})
})

app.get('/home',(req,res,next)=>{
    res.json({status:"ok",message:"Home page"})
})

app.listen(3009,()=>{
    console.log("server started");
})