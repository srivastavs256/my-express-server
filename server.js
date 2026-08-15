const express = require('express');
const app = express();
const PORT =300;

app.use((req,res,) =>{
    req.send("Hello this is my first  World");
});

app.listen(PORT,()=>{
    console.log(`Server is up and runing on port ${PORT}!  ready to handle the file request`);
});
