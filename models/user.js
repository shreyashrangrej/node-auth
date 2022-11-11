const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schema = new Schema({

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

  isActive: {
    type: Boolean
  },

  isDeleted: {
    type: Boolean
  },

  createdAt: {
    type: Date
  },

  updatedAt: {
    type: Date
  },

  addedBy: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },

  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },

  mobileNo: {
    type: String
  },

  resetPasswordLink: {
    code: String,
    expireTime: Date
  },

  loginRetryLimit: {
    type: Number,
    default: 0
  },

  loginReactiveTime: {
    type: Date
  },

  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }

})

const user = mongoose.model('user',schema);
module.exports = user;