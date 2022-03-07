const mongoose = require('mongoose');

require ('dotenv').config();

db = mongoose

try{
db.connect(process.env.MONGO_CONNECT_STRING)

db.Promisse = global.Promise;
console.log("conectado no banco");

}catch(err){
  console.log(err);

}
module.exports = db;