const db = require('../db/db');

const UsersSchema = new db.Schema({

  name: {
    type: String,
    required: true,

  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,


  },

});

const Users = db.model('Users', UsersSchema);

module.exports = Users;