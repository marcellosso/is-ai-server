import { Router } from 'express';
import { authenticateHandler } from '../controllers/auth.controller';

const router = Router();

router.post("/signin", authenticateHandler)

export default router;