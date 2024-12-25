import cors from 'cors';
import express from 'express';
const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: 'Something went wrong!' });
});

app.get('/', (req, res) =>
	res.status(200).json({ message: 'Study together!!!' })
);

// Routers
import assignmentRouter from './routes/assignment.routes.js';

app.use('/api/assignments', assignmentRouter);

export { app };
