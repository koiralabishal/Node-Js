const input = process.argv;


// if(input[2]%2 === 0){
//     console.log(input[2]+' is even number...');
// }else if(input[2]%2 != 0){
//     console.log(input[2] +' is odd number...');
// }


// if(input[2]>input[3]){
//     console.log(input[2] +' is greater than ' + input[3]);
// }else{
//     console.log(input[3] +' is greater than ' + input[2]);
// }

const fs = require('fs');

if(input[2] === 'add'){
    fs.writeFileSync(input[3], input[4]);
}else if(input[2] === 'remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log("Invalid input");
}