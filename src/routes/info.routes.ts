import { Router } from 'express';
import upload from '../middlewares/uploadMiddleware';

import { createLevelHandler, createBulkLevelHandler, deleteLevelHandler, getLevelsHandler, updateLevelHandler, updateLevelsAnswersHandler } from '../controllers/info.controllers';
import { authorize } from '../middlewares/authorizeMiddleware';

const router = Router();

// Get all levels
router.get('/', getLevelsHandler);

// Create a new level
router.post('/', [upload.single('image'), authorize() as any], createLevelHandler)

router.post('/bulk', [upload.array('images', 20)], createBulkLevelHandler)

// Update levels answers
router.options('/answers' as any)
router.post('/answers', updateLevelsAnswersHandler)

// Update a level
router.put('/:id', [authorize() as any], updateLevelHandler)

// Delete a level
router.delete('/:id', [authorize() as any], deleteLevelHandler);

export default router;