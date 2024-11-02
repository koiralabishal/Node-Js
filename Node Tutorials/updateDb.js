const dbConnect = require('./dbConnect');

const update = async ()=>{
    // console.log('Updation')
    const db = await dbConnect();
    // console.log(db);
    const update = await db.updateOne( //use updateMany to update multiple records
       
            {
                name: 'Usha Devi Koirala'
            },
            {
                $set: {
                    age: 80
                }
            }
    )

    if(update.matchedCount === 0){
        console.log('Record Not Found');
    }else if(update.matchedCount>0){
            if(update.modifiedCount === 0){
                console.log('Record Already Modified');
            }else if(update.modifiedCount>0){
                console.log('Record Modified Successfully');
            }
    }

    console.log(update);
}

update();