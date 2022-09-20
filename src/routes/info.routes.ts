import { Router } from 'express';
import cors from 'cors';
import upload from '../middlewares/uploadMiddleware';

import { corsAdminOptions, corsAllOptions } from '../cors';
import { createLevelHandler, deleteLevelHandler, getLevelsHandler, updateLevelHandler } from '../controllers/info.controllers';

const router = Router();

// Get all levels
router.get('/', cors(corsAllOptions), getLevelsHandler);

// Create a new level
router.post('/', [upload.single('image'), cors(corsAdminOptions)], createLevelHandler)

// Update a level
router.put('/:id', cors(corsAdminOptions), updateLevelHandler)

// Delete a level
router.delete('/:id', cors(corsAdminOptions), deleteLevelHandler);

export default router;