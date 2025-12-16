const router = require('express').Router();
const Apartment = require('../models/Apartment');


router.get('/', async (req, res) => {
const filter = {};
if (req.query.location) filter.location = req.query.location;
if (req.query.minPrice) filter.price = { $gte: req.query.minPrice };


const apartments = await Apartment.find(filter);
res.json(apartments);
});


router.post('/', async (req, res) => {
const apartment = await Apartment.create(req.body);
res.json(apartment);
});


router.get('/:id', async (req, res) => {
res.json(await Apartment.findById(req.params.id));
});


module.exports = router;