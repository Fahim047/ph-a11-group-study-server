import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		difficulty: {
			type: String,
			enum: ['easy', 'medium', 'hard'],
			required: true,
		},
		description: {
			type: String,
		},
		imageURL: {
			type: String,
			required: true,
		},
		marks: {
			type: Number,
			required: true,
			default: 10,
			min: [10, 'Marks must be at least 10.'],
		},
		deadline: {
			type: Date,
			required: true,
			validate: {
				validator: (date) => date > Date.now(),
				message: 'Deadline must be a future date.',
			},
		},
		author: {
			email: {
				type: String,
				required: true,
				trim: true,
				lowercase: true,
			},
			name: {
				type: String,
				required: true,
				trim: true,
			},
			photoURL: {
				type: String,
				required: true,
			},
		},
	},
	{ timestamps: true }
);

export const Assignment = mongoose.model('Assignment', assignmentSchema);
