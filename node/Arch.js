const fs= require("fs");

console.log('1');

//blocking path

// const result = fs.readFileSync("contacts.txt","utf-8");

// console.log(result);

// console.log('2');

// Non Blocking path

fs.readFile("contacts.txt","utf-8",(err,result) => {

console.log(result);

});


console.log('2');