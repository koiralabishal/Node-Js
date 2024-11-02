const express = require('express');
const app = express();

const path = require('path');
const appPath = path.join(__dirname, 'Folder');


app.use(express.static(appPath));

app.listen(4500);