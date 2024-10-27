const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
console.log(dirPath);

//create
// fs.writeFileSync(dirPath+"/apple.txt", "Apple is a Fruit");
 
//read
// fs.readFile(dirPath+"/apple.txt", 'utf8', (err, data)=>{
//     console.log(data);
// });

// update
// fs.appendFile(dirPath+"/apple.txt", ". It is tasty and delicious", (err)=>{
//     if(!err){
//         console.log("File is Updated");
//     }
// });


//rename
// fs.rename(dirPath+"/apple.txt", dirPath+"/fruit.txt", (err)=>{
//     if(!err){
//         console.log("File name is Updated");
//     }
// });

//delete
// fs.unlinkSync(dirPath+"/fruit.txt", (err)=>{
//     if(!err){
//         console.log("File  is deleted successfully");
//     }
// })