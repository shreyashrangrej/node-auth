const mongoose = require('mongoose');
const uri = process.env.NODE_ENV === 'test' ? process.env.MONGO_DB_URL : process.env.MONGO_DB_URL;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let db = mongoose.connection;

db.once('open', () => {
    console.log('Database Connection Successful');
});

db.on('error', () => {
    console.log('Error in database connection');
});

module.exports = mongoose;