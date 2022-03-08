const express = require("express");
const bodyParser = require("body-parser");
const userController = require('./src/controller/controllerUsers')
const bookController = require('./src/controller/controllerBooks')

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', userController)
app.use('/book', bookController)



app.listen(3000, () => { console.log("Servidor Status: 200") });


