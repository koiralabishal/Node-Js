const dbConnect = require('./dbConnect');
// const colors = require('colors');

// using await and async function
const main = async (res)=>{
    let data = await dbConnect();
    data =await data.find().toArray();
    console.log(data);
      
}

main();


//uisng .then function
dbConnect().then((res)=>{
    res.find().toArray().then((data)=>{
        console.warn(data)
    })
})

