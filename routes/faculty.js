const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

// CRUD operations for faculty
router.get('/', async (req, res) => {
    const faculties = await Faculty.find();
    res.send(faculties);
});

router.post('/', async (req, res) => {
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.send(faculty);
});

router.put('/:id', async (req, res) => {
    const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(faculty);
});

router.delete('/:id', async (req, res) => {
    await Faculty.findByIdAndDelete(req.params.id);
    res.send({ message: 'Faculty deleted' });
});

module.exports = router;
