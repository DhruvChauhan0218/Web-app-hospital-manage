const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
app = express();
const uri = 'mongodb://127.0.0.1:27017/CBO'
mongoose.connect(uri)
.then((result)=>
    app.listen(2000))
mongoose.connection.once('open',function(){
    console.log("Connected")
}) 