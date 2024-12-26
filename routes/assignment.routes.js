import { Router } from 'express';
import jwt from 'jsonwebtoken';
import {
	addAssignment,
	deleteAssignment,
	getAllAssignments,
	getAllPendingAssignments,
	getAssignmentById,
	updateAssignment,
} from '../controllers/assignment.controllers.js';
const router = Router();
export const verifyToken = (req, res, next) => {
	const token = req?.cookies?.token;
	if (!token) {
		return res.status(401).json({ message: 'Unauthorized' });
	}
	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).json({ message: 'Unauthorized' });
		}
		req.user = decoded;
		next();
	});
};
router.post('/', verifyToken, addAssignment);
router.get('/', getAllAssignments);
router.get('/pending', getAllPendingAssignments);
router.get('/:id', getAssignmentById);
router.put('/:id', verifyToken, updateAssignment);
router.delete('/:id', verifyToken, deleteAssignment);

export default router;
