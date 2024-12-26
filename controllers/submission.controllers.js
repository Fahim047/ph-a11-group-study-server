import { Assignment } from '../models/assignment.models.js';
import { Submission } from '../models/submission.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import {
	removeMongoDBIdFromArray,
	removeMongoDBIdFromObject,
} from '../utils/mongo-utils.js';

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
			.populate('assignmentId', 'title description marks deadline')
			.sort({ submittedAt: -1 });

		if (!pendingSubmissions.length) {
			return res.status(404).json({ message: 'No pending assignments found.' });
		}

		const cleanedData = removeMongoDBIdFromArray(
			pendingSubmissions.map((item) => item.toObject())
		);

		res.status(200).json(cleanedData);
	} catch (error) {
		console.error('Error fetching pending assignments:', error);
		res.status(500).json({
			message: 'Failed to fetch pending assignments.',
			error: error.message,
		});
	}
};

export const updateMarks = async (req, res) => {
	try {
		const { id } = req.params;
		const { obtainedMarks, feedback } = req.body;

		if (obtainedMarks == null) {
			return res
				.status(400)
				.json({ message: 'Obtained marks are a required field.' });
		}

		const updatedSubmission = await Submission.findByIdAndUpdate(
			id,
			{
				obtainedMarks,
				feedback,
				status: 'evaluated',
			},
			{ new: true }
		);

		if (!updatedSubmission) {
			return res.status(404).json({ message: 'Submission not found.' });
		}

		const cleanedSubmission = removeMongoDBIdFromObject(
			updatedSubmission.toObject()
		);

		res.status(200).json(cleanedSubmission);
	} catch (error) {
		console.error('Error updating submission:', error);
		res.status(500).json({
			message: 'Failed to update submission.',
			error: error.message,
		});
	}
};
