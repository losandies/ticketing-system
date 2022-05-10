const express = require('express');
const connectDB = require('./config/db');
const app = express();
const colors = require('colors');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.status(200).json({ msg: 'Welcome to the ticketing system' });
});

app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
