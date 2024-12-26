import { Router } from 'express';
import {
	addSubmission,
	getPendingAssignments,
	getSubmissions,
	updateMarks,
} from '../controllers/submission.controllers.js';

const router = Router();

router.post('/', addSubmission);
router.get('/', getSubmissions);
router.get('/pending', getPendingAssignments);
router.put('/:id', updateMarks);
export default router;
