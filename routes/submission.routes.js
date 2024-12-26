import { Router } from 'express';
import {
	addSubmission,
	getPendingAssignments,
} from '../controllers/submission.controllers.js';

const router = Router();

router.post('/', addSubmission);
router.get('/pending', getPendingAssignments);

export default router;
