const mongoose = require('mongoose');

//connect
mongoose.connect('mongodb://127.0.0.1:27017/Company').then(()=>{
    console.log('connected to mongoDB');
}).catch((err)=>{
    console.error('failed to connect to mongoDB ::::', err);
})