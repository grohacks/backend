const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    name: String,
    department: String,
    experience: Number,
});

module.exports = mongoose.model('Faculty', FacultySchema);
