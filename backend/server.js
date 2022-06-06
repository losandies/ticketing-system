const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');
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

// Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
	// Set static folder

	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
