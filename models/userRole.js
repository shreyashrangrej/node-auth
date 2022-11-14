const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    roleId: {
        type: Schema.Types.ObjectId,
        ref: 'role'
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
const userRole = mongoose.model('userRole',schema);
module.exports = userRole;