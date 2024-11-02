const express = require('express');
const reqFilter = require('./Folder/middleware'); //apply middleware from different file
const app = express();
const route = express.Router();
const path = require('path');
const appPath = path.join(__dirname, 'Folder');

//set dynamic route
app.set('view engine', 'ejs'); // using ejs template engine

//middleware created
// const reqFilter = (req, res, next) => {
//         if (!req.query.age){
//             res.send("Provide your age...");
//         }else if(req.query.age<18){
//             res.send("Sorry...You can't access this page....");

//         }else{
//             next();
//         }
        
// };

//use middleware 
//application-level middleware
// app.use(reqFilter); 

//rout-level middleware
route.use(reqFilter); 
//middleware on sigle route
app.get('/home',reqFilter,(req,res)=>{
    res.sendFile(`${appPath}/home.html`);

});

app.get('/profile',(req,res)=>{
    const data = {
        name: 'Bishal Koirala',
        email: 'bishal.koirala@gmail.com',
        city: 'Birauta,Pokhara',
        skills: ['node js', 'java', 'php']
    }
    res.render('profile', {data});
})

//apply middle ware on group of routes
route.get('/login', (req,res)=>{
    res.render('login');
});

route.get('/about',(req,res)=>{
    res.sendFile(`${appPath}/about.html`);

});

route.get('/contact',(req,res)=>{
    res.send(`This is a contact page`);

});

app.use('/', route);
 //show 404 page
app.get('*',(req,res)=>{
    res.sendFile(`${appPath}/404page.html`);

});
 



app.listen(4502);