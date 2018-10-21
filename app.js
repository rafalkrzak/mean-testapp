const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res) => {
  res.send("Invalid page");
});

app.listen(port, () => {
  console.log('Starting the server at port ${port}');
});

//connect mongoose to our database

const config = require('./config/database');
mongoose.connect(config.database);

const bucketlist = require('./controllers/bucketlist');

app.use('/bucketlist',bucketlist);
