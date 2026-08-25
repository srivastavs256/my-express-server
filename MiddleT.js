const express = require('express');
const app=express();
let port = 3200;


app.use ((req,res,next)=>{
    console.log("Authentication  Required for middleware");
    next();
})

app.use ("/library-2",(req,res,next)=>{
    console.log("Book recomendation");
    next();
})

app.use ("/library-3",(req,res,next)=>{
    console.log("Special access required");
    next();
})

app.get("/library-2",(res,req)=>{
    res.send("<h1> lib 2 entered</h1>")
})

app.get("/library-3",(res,req)=>{
    res.send("<h1> lib 3 entered</h1>")
})

app.listen(port,()=>{
    console.log("server is running");
})