import { Router } from 'express';
import {
	addAssignment,
	deleteAssignment,
	getAllAssignments,
	getAssignmentById,
	updateAssignment,
} from '../controllers/assignment.controllers.js';

const router = Router();

router.post('/', addAssignment);
router.get('/', getAllAssignments);
router.get('/:id', getAssignmentById);
router.put('/:id', updateAssignment);
router.delete('/:id', deleteAssignment);

export default router;
