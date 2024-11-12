const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URL);

// CORS configuration to allow specific origins
const corsOptions = {
    origin: ['https://frontend-e823.onrender.com', 'http://localhost:3000'],  // Frontend URLs
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));  // Apply CORS with the configured options

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
