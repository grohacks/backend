const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// CRUD operations for students
router.get('/', async (req, res) => {
    const students = await Student.find();
    res.send(students);
});

router.post('/', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
});

router.put('/:id', async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(student);
});

router.delete('/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send({ message: 'Student deleted' });
});

module.exports = router;
