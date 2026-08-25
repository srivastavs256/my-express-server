const fs = require("fs");
//this i sync call 
 //fs.writeFileSync("./test.txt", "hwllo world");

 
//asyc...

//fs.writeFile("./test.txt","hi shivansshu async ",(err)=>{})

    // async fun does not return anything

// const result = fs.readFileSync('./contacts.txt','utf-8')

// console.log(result)

    // async fun does not return anything

    // fs.readFile('./contacts.txt','utf-8',  (err,res) => {
    //     if(err){
    //         console.log('Error', err)
    //     }else{
    //         console.log(res)
    //     }
    
    // })

    // use of append  child --> it mean it doesnt overwrite anything neeche likhta chala jayega.... overwrite nahi karega

   //fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString() ); 

//fs.appendFileSync('./test.txt','hiiii shiv  \n')

//copying file one to  another

fs.cpSync('./test.txt','./contacts.txt')

// for delete we use Unlink(./)