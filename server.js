"use strict";

const ejs = require('ejs');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const snacksRouter = require('./routes/snacks');
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

// app.use('/snacks', snacksRouter);




app.listen(PORT, () => {
    console.log('Listening on', PORT);
});



module.exports = app;
