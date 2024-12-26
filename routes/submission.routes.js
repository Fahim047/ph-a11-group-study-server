import { Router } from 'express';
import {
	addSubmission,
	getPendingAssignments,
	getSubmissions,
	updateMarks,
} from '../controllers/submission.controllers.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = Router();

router.post('/', verifyToken, addSubmission);
router.get('/', verifyToken, getSubmissions);
router.get('/pending', verifyToken, getPendingAssignments);
router.put('/:id', verifyToken, updateMarks);
export default router;
