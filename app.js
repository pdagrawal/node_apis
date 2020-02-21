const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

//mongoDB connection string
const url = 'mongodb+srv://mongo-db-user:RkV8oQR70xzlB4g1@pdcluster0-fakv1.mongodb.net/test?retryWrites=true&w=majority';

const apiRoutes = require('./routes/api_routes.js');
app.use('/', apiRoutes);

mongoose.connect(url, {useNewUrlParser: true})
  .then(()=>{
    app.listen(3000);
    console.log('database connected!');})
  .catch(err => console.log(err));

