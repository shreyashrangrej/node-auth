const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema{
  username: {
    type: String
  },

  password: {
    type: String
  },

  email: {
    type: String
  },

  firstName: {
    type: String
  },

  lastName: {
    type: String
  },

  
}