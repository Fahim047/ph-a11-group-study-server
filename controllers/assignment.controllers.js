import { Assignment } from '../models/assignment.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { removeMongoDBIdFromArray } from '../utils/mongo-utils.js';
export const addAssignment = asyncHandler(async (req, res) => {
	const {
		title,
		difficulty,
		marks,
		description,
		imageURL,
		deadline,
		author: { email, name, photoURL },
	} = req.body;

	if (
		!title ||
		!difficulty ||
		!marks ||
		!imageURL ||
		!deadline ||
		!email ||
		!name ||
		!photoURL
	) {
		return res
			.status(400)
			.json({ status: false, error: 'All fields are required' });
	}
	const newAssignment = await Assignment.create({
		title,
		difficulty,
		marks,
		description,
		imageURL,
		deadline,
		author: {
			email,
			name,
			photoURL,
		},
	});

	return res.status(201).json({
		status: true,
		data: newAssignment,
	});
});

export const getAllAssignments = asyncHandler(async (req, res) => {
	try {
		let assignments = await Assignment.find().lean();
		if (assignments.length) {
			assignments = removeMongoDBIdFromArray(assignments);
		}
		res.status(200).json(assignments);
	} catch (err) {
		res.status(400).json({
			error: err.message,
		});
	}
});
