const express = require('express');
const { json } = require('express');
const path = require('path');


//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));


//Middlewares

app.use(json());

//Global Variables



//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/consultorios.routes'));


//static files
app.use(express.static(path.join(__dirname,'public')));


module.exports = app;