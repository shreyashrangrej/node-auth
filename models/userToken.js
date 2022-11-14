const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },

    token: { 
        type: String 
    },

    tokenExpiredTime: { 
        type: Date 
    },

    isTokenExpired: {
        type: Boolean,
        default: false
    },

    isActive: { 
        type: Boolean 
    },

    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },

    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },

    isDeleted: { 
        type: Boolean 
    }
})

schema.set('timestamps', true)
const userTokens = mongoose.model('userTokens',schema);
module.exports = userTokens;