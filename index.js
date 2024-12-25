import dotenv from 'dotenv';
import { app } from './app.js';
import { connectDB } from './db/db.js';
dotenv.config({
	path: './.env',
});
const port = process.env.PORT || 8000;

connectDB()
	.then(() => {
		app.on('error', (err) => {
			console.log('Error occured in the server: ', err);
			throw err;
		});
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch((err) => {
		console.error('MongoDB connection failed: ', err);
	});
