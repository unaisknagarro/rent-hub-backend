const mongoose = require('mongoose');


const ApartmentSchema = new mongoose.Schema({
title: String,
description: String,
location: String,
price: Number,
amenities: [String],
ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Apartment', ApartmentSchema);