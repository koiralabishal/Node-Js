const express = require("express");
require("./config");
const Patient = require("./patient");

const app = express();
app.use(express.json());

//post api
app.post("/", async (req, res) => {
  let data = Patient(req.body);
  let result = await data.save();
  console.log(data);
  res.send(data);
});

//get api

app.get("/", async (req, res) => {
  let data = await Patient.find();
  console.log(data);
  res.send(data);
});

//put api
app.put("/:_id", async (req, res) => {
  let data = await Patient.updateOne(
    req.params,
    {
      $set:req.body
    }
  );
  console.log(data);
  res.send(data);

});


//delete api 
app.delete("/:_id", async (req, res) => {
    let data = await Patient.deleteOne(req.params);
    console.log(data);
    res.send(data);
});






//search api
app.get("/search/:key", async (req, res) => {
    console.log(req.params.key);
    // res.send({ result: "Search"});
    let data = await Patient.find(
        {"$or":[
            {"address": {$regex: req.params.key}},
            {"name": {$regex: req.params.key}},
            {"email": {$regex: req.params.key}}
        ]}
    )
    console.log(data);
    res.send(data);
  });


app.listen(5000);
