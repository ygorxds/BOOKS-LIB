const express =  require ("express");
const bodyParser = require ("body-parser");

const app =  express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./src/controller/controller')

app.listen(3000, () => {console.log("servidor online")} );


