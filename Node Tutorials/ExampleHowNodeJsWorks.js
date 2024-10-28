console.log("Execution Start");//registered in callstack after main() function

setTimeout(()=>{console.log("2 sec delay")},2000);// registered in Node APIs at first

setTimeout(()=>{console.log("0 sec delay")},0);// registered in Node APIs at second


console.log("Execution End");//registered in callstack after console.log("Execution Start") function