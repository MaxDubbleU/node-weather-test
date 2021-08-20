const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: Number,
    firstName: String,
    lastName: String
})

module.exports = mongoose.model('test', userSchema);

//This is just the set up for the info that will be passed into the database 