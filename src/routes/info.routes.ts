import { Router } from 'express';
import { createLevelHandler, deleteLevelHandler, getLevelsHandler, updateLevelHandler } from '../controllers/info.controllers';
import upload from '../middlewares/uploadMiddleware';

const router = Router();

// Get all levels
router.get('/', getLevelsHandler);

// Create a new level
router.post('/', upload.single('image'), createLevelHandler)

// Update a level
router.put('/:id', updateLevelHandler)

// Delete a level
router.delete('/:id', deleteLevelHandler);

export default router;