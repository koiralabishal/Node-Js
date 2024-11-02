module.exports= (req, res, next) => {
    if (!req.query.age){
        res.send("Provide your age...");
    }else if(req.query.age<18){
        res.send("Sorry...You can't access this page....");

    }else{
        next();
    }
    
};
