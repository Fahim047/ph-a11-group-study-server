import { Assignment } from '../models/assignment.models.js';
import { Submission } from '../models/submission.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const addSubmission = asyncHandler(async (req, res) => {
	const { assignmentId, userEmail, googleDocsLink, note } = req.body;

	const assignment = await Assignment.findById(assignmentId);
	if (!assignment) {
		return res.status(404).json({ message: 'Assignment not found' });
	}
	const submission = new Submission({
		assignmentId,
		userEmail,
		googleDocsLink,
		note,
	});

	await submission.save();
	res
		.status(201)
		.json({ message: 'Assignment submitted successfully', submission });
});

export const getPendingAssignments = async (req, res) => {
	try {
		const pendingSubmissions = await Submission.find({ status: 'pending' })
			.populate('assignmentId', 'title description dueDate')
			.sort({ submittedAt: -1 });
		if (pendingSubmissions.length === 0) {
			return res.status(404).json({ message: 'No pending assignments found.' });
		}

		res.status(200).json(pendingSubmissions);
	} catch (error) {
		console.error('Error fetching pending assignments:', error);
		res
			.status(500)
			.json({
				message: 'Failed to fetch pending assignments.',
				error: error.message,
			});
	}
};
