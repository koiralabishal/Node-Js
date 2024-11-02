const dbConnect = require('./dbConnect');


const insert = async ()=>{
    const db =await dbConnect();
    const result = await db.insertMany([ //to insert one record insertOne({})
        {
            name: 'Usha Devi Koirala',
            age: 45,
            email: 'usha@gamil.com',
            address: 'Pokhara'
        },
        {
            name: 'Sandip Thapa Magar',
            age: 40,
            email: 'sandip@gamil.com',
            address: 'Pokhara'
        }
    ]);
    console.log(result);
    if(result.acknowledged === true){
        console.log('data inserted successfully');
    }
}

insert();