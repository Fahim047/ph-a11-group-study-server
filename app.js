import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();

app.use(
	cors({
		// origin: process.env.CORS_ORIGIN,
		origin: ['http://localhost:5173', 'https://ph-a11-group-study.vercel.app'],
		credentials: true,
	})
);
app.use(cookieParser());
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

app.post('/api/jwt', (req, res) => {
	const user = req.body;
	const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
	res.cookie('token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		// maxAge: 3600000, // 1 hour
	});
	res.status(200).json({ message: 'Jwt token created' });
});

// Routers
import assignmentRouter from './routes/assignment.routes.js';
import submissionRouter from './routes/submission.routes.js';

app.use('/api/assignments', assignmentRouter);
app.use('/api/submissions', submissionRouter);

export { app };
