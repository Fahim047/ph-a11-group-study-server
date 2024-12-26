import { Router } from 'express';
import {
	addAssignment,
	deleteAssignment,
	getAllAssignments,
	getAllPendingAssignments,
	getAssignmentById,
	updateAssignment,
} from '../controllers/assignment.controllers.js';
import { verifyToken } from '../utils/verifyToken.js';
const router = Router();

router.post('/', verifyToken, addAssignment);
router.get('/', getAllAssignments);
router.get('/pending', getAllPendingAssignments);
router.get('/:id', getAssignmentById);
router.put('/:id', verifyToken, updateAssignment);
router.delete('/:id', verifyToken, deleteAssignment);

export default router;
