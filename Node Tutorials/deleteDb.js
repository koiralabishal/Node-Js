const dbConnect = require('./dbConnect');

const delet = async ()=>{
    const db = await dbConnect();
    const delet = await db.deleteMany( // use deleteOne to delete one record
        {
            name: 'Usha Devi Koirala'
        }
    );

    console.log(delet);

    if(delet.deletedCount>0){
        console.log("Deleted successfully");
    }else if(delet.deletedCount===0){
        console.log("Not Found");

    }
}

delet();