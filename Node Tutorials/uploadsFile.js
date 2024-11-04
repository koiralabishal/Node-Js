const express = require('express');
const multer = require('multer');

const app = express();

//create middleware
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "Uploads");
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname+"-"+Date.now()+".jpg");
        }
    })

}).single("upload_file")


app.post('/uploads', upload, (req, res) => {
    res.send({result: "upload Success"});
});



app.listen(5000);

