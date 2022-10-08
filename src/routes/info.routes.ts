import { Router } from 'express';
import cors from 'cors';
import upload from '../middlewares/uploadMiddleware';

import { corsAdminOptions, corsAllOptions } from '../cors';
import { createLevelHandler, deleteLevelHandler, getLevelsHandler, updateLevelHandler, updateLevelsAnswersHandler } from '../controllers/info.controllers';
import { authorize } from '../middlewares/authorizeMiddleware';

const router = Router();

// Get all levels
router.get('/', cors(corsAllOptions), getLevelsHandler);

// Create a new level
router.post('/', [upload.single('image'), cors(corsAdminOptions), authorize() as any], createLevelHandler)

// Update levels answers
router.post('/answers', cors(corsAllOptions), updateLevelsAnswersHandler)

// Update a level
router.put('/:id', [cors(corsAdminOptions), authorize() as any], updateLevelHandler)

// Delete a level
router.delete('/:id', [cors(corsAdminOptions), authorize() as any], deleteLevelHandler);

export default router;