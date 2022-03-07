
const db = require('../db/db');

const BooksSchema = new db.Schema ({

  
  name:{
    type:String,
    required: true,
  },
  
  autor:{
    type:String,
    reqired: false,
  },
  
  link:{
    type:String,
    reqired:true,
    unique:true,
  },

});

const Books = db.model('Books', BooksSchema);

module.exports = Books;





