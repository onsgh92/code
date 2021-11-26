const express = require("express");
const app = express() ;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://projetf1:24540324@cluster0.phaaw.mongodb.net/Clustor0?retryWrites=true&w=majority'
).then (( ) => { 
    console.log('connexion success!!!')
} ).catch((error)=> {console.log("error!!")});

app.

module.exports = app ;
