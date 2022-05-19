const express = require('express');
const connectDB = require('./config/db');
const app = express();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
