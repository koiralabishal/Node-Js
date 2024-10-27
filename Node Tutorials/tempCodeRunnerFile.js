fs.unlinkSync(dirPath+"/fruit.txt", (err)=>{
    if(!err){
        console.log("File  is deleted successfully");
    }
})