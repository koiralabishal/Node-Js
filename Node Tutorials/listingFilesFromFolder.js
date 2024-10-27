const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'Files');
console.log(dirPath);

//create multiple files in the directory
for(i=0; i<5; i++) {
    fs.writeFileSync(dirPath+"/hello"+i+".txt","This a simple file of hello"+i+".txt");
}

//listing files from the directory
fs.readdir(dirPath, (err, files)=>{
    files.forEach((file)=>{
        console.log(file);
    });
})