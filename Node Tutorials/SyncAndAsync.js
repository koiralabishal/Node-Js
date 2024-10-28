
//Synchronously
// console.log("Start Execution....");

// console.log("Logic Execution....");

// console.log("Execution Completed....");



//Asynchronously
// console.log("Start Execution....");

// setTimeout(()=>{
//     console.log("Logic Execution....");
// },2000)

// console.log("Execution Completed....");



//Drawbacks

let a=10;
let b=10;

setTimeout(()=>{b=20},2000)

console.log(a+b);
