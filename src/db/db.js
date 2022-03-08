const mongoose = require('mongoose');
db = mongoose


//implementando para variável global do mongo via .env
require ('dotenv').config();


try{
db.connect(process.env.MONGO_CONNECT_STRING)

db.Promisse = global.Promise;
console.log("DataBase status: 200");

}catch(err){
  console.log(err);

}
module.exports = db;