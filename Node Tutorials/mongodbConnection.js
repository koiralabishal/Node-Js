const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'medidocx';
const client = new MongoClient(url);


//under same file
// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('patient');
//     let data = await collection.find().toArray();
//     console.log(data);
// }

// getData();



// async function is used to use await
async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('patient');
    // let data = await collection.find().toArray();
    // console.log(data);
}


//handle waiting time using await 
// const main = async ()=>{
//     let data =await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }

// main();





//handle waiting time using Promise Module
dbConnect().then((res)=>{
    res.find().toArray().then((data)=>{
        console.log(data);
    });
})