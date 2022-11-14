const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true
    },

    weight: {
        type: Number,
        required: true
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
const role = mongoose.model('role',schema);
module.exports = role;