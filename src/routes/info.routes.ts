import { Router } from 'express';
import { createLevelHandler } from '../controllers/info.controllers';
import upload from '../middlewares/uploadMiddleware';

const router = Router();

// Get all levels
router.get('/');

// Create a new level
router.post('/', upload.single('image'), createLevelHandler)

// Update a level
router.put('/:id')

// Delete a level
router.delete('/:id')

export default router;