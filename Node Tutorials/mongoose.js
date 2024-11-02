const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/medidocx");

const schema = new mongoose.Schema({
  //create schema
  name: String,
  age: Number,
  email: String,
});

const insert = async () => {
  const model = mongoose.model("admins", schema);
  let data = new model({
    name: "Mayukh Baral",
    age: 21,
    email: "baral@gmail.com",
  });
  let result = await data.save();
  console.log(result);
};
// insert();

const update = async () => {
  const model = mongoose.model("admins", schema);
  let data = await model.updateOne(
    {
      age: 21
    },
    {
      $set: {
        name: "Jalaluddin Mohammad Akabar",
      }
    }
  );
  console.log(data);
};

// update();

const read = async () => {
    const model = mongoose.model('admins',schema);
    let data = await model.find();
    console.log(data);
}
// read();


const del = async () => {
    const model = mongoose.model('admins',schema);
    let data = await model.deleteOne({age: 21});
    console.log(data);
}
del();