const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
name: String,
email: { type: String, unique: true },
password: String,
favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Apartment' }]
});


module.exports = mongoose.model('User', UserSchema);