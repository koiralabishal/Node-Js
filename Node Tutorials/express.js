const express = require('express');
const app = express();


// app.get('/Home', (req,res)=>{
//     res.send(
//         '<h1 style = "color: red; text-align: center; padding: 280px 0">Welcome to the Home Page, '+ req.query.name +'</h1>'
        
        
//     );
// })

// app.get('/About', (req,res)=>{
//     res.send('<h1 style = "color: green; text-align: center;padding: 280px 0">Welcome to the About Page</h1>');
// })

// app.get('/Contact', (req,res)=>{
//     res.send('<h1 style = "color: blue; text-align: center;padding: 280px 0">Welcome to the Contact Page</h1>');
// })


app.get('/Home', (req,res)=>{
    res.send(`
        <h1 style = "color: red; text-align: center; padding: 280px 0">Welcome to the Home Page, ${req.query.name}</h1>
        <br />
        <a href = '/About'><h3 style = "color: blue; text-decoration: underline; position: absolute; top: 350px; left: 680px">Go to About Page</h3></a>
        
    `);
})

app.get('/About', (req,res)=>{
    res.send(`
        <h1 style = "color: green; text-align: center;padding: 280px 0">Welcome to the About Page</h1>
        <input type="text" placeholder = "User Name" value= ${req.query.name} style = "position: absolute; top: 350px; left: 680px">
        <br />
        <button type="submit" style = "position: absolute; top: 380px; left: 730px">Submit</button>
        <br />
        <br />
        <a href = '/Home'><h3 style = "color: blue; text-decoration: underline; position: absolute; top: 400px; left: 700px">Go to Home Page</h3></a>
        `);
})

app.get('/Contact', (req,res)=>{
    res.send([
        {
            name: 'Bishal',
            email: 'bishal@gmail.com'
        },
        {
            name: 'Shyam',
            email: 'shyam@gmail.com'
        }
    ]);
})

app.listen(4500);