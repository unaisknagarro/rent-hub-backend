const router = require('express').Router();
const Apartment = require('../models/Apartment');


router.get('/', async (req, res) => {
    try {
        const filter = {};
        if (req.query.location) filter.location = req.query.location;
        if (req.query.minPrice) filter.price = { $gte: Number(req.query.minPrice) };


        const apartments = await Apartment.find(filter);
        res.json(apartments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


router.post('/', async (req, res) => {
    const apartment = await Apartment.create(req.body);
    res.json(apartment);
});


router.get('/:id', async (req, res) => {
    res.json(await Apartment.findById(req.params.id));
});


module.exports = router;