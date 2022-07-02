const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));

app.use(errorHandler);

if (
	process.env.NODE_ENV === 'production' ||
	process.env.NODE_ENV === 'staging'
) {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname + '/client/build/index.html'));
	});
}

app.listen(port, () => console.log(`Server running on port: ${port}`));
