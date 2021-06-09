const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({extended:false}));
var port = 1212;
mongoose.connect('mongodb://localhost:27017/restauranttest', {useNewUrlParser: true, useUnifiedTopology: true});
                              
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("mongodb connected!");
});


app.use('/', require('./Routes/router'));
app.listen(port, function() {
    console.log('app run in port :' + port);
});