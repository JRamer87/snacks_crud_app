"use strict";

const ejs = require('ejs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const snacksRouter = require('./routes/snacks');


app.set('view engine', 'ejs');

app.use(mogran("tiny"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride("_method"));

app.use('/snacks', snacksRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
