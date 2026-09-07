// const express = require('express');
// const app = express();
// const PORT = 3010;

// app.use((req, res) => {
//     res.send("Hello, this is my first World"); // Use res instead of req
// });

// app.listen(PORT, () => {
//     console.log(`Server is up and running on port ${PORT}! Ready to handle the file request`);
// });

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

app.get("/library-2",(req,res)=>{
    res.send("<h1> lib 2 entered</h1>");
})

app.get("/library-3",(req,res)=>{
    res.send("<h1> lib 3 entered</h1>");
})

app.listen(port,()=>{
    console.log("server is running");
})

app.listen(port, () => {
console.log(`Server is up and running on port ${port}! Ready to handle the file request`);
});