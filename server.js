const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://unaiskamle:unaisk1989@unaiscluster.r4n5di5.mongodb.net/RentHub?appName=UnaisCluster');


app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/apartments', require('./routes/apartment.routes'));


app.listen(4000, () => console.log('Server running on port 4000'));