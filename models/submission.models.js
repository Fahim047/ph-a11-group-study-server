import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema(
	{
		assignmentId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Assignment',
			required: true,
		},
		userEmail: { type: String, required: true },
		googleDocsLink: { type: String, required: true },
		note: { type: String },
		status: {
			type: String,
			enum: ['pending', 'evaluated'],
			default: 'pending',
		},
		obtainedMarks: { type: Number },
		feedback: { type: String },
		submittedAt: { type: Date, default: Date.now },
	},
	{ timestamps: true }
);

export const Submission = mongoose.model('Submission', submissionSchema);
