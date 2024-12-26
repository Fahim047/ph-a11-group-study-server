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
	res
		.status(err.status || 500)
		.json({ message: err.message || 'Internal Server Error!' });
});

app.get('/', (req, res) =>
	res.status(200).json({ message: 'Study together!!!' })
);

// Routers
import assignmentRouter from './routes/assignment.routes.js';
import submissionRouter from './routes/submission.routes.js';

app.use('/api/assignments', assignmentRouter);
app.use('/api/submissions', submissionRouter);

export { app };
