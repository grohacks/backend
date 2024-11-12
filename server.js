const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL);

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Routes
const studentRoutes = require('./routes/student');
const facultyRoutes = require('./routes/faculty');

app.use('/api/students', studentRoutes);
app.use('/api/faculty', facultyRoutes);
