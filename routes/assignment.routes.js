import { Router } from 'express';
import {
	addAssignment,
	getAllAssignments,
} from '../controllers/assignment.controllers.js';

const router = Router();

router.post('/', addAssignment);
router.get('/', getAllAssignments);

export default router;
