const express = require("express");
const dbConnect = require("./dbConnect");
const mongodb = require("mongodb");

const app = express();

app.use(express.json());

//GETApi
app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});

//POSTApi
app.post("/", async (req, res) => {
  const db = await dbConnect();
  const insertData = await db.insertOne(req.body);
  res.send(insertData);
  console.log(insertData);
});

//PUTApi
app.put("/:name", async (req, res) => {
  const db = await dbConnect();
  //   const updateData = await db.updateMany({name:req.body.name}, {$set:req.body});
  const updateData = await db.updateMany(
    { name: req.params.name },
    { $set: req.body }
  );
  res.send({ result: "Updated" });
  console.log(updateData);
});

//DELETEApi
app.delete("/:id", async (req, res) => {
  const db = await dbConnect();
  const deleteData = await db.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send({ result: "Deleted" });
  console.log(deleteData);
});


app.listen(5000);
