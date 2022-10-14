import { Router } from 'express';
import { authenticateHandler, validateUserHandler } from '../controllers/auth.controller';
import { authorize } from '../middlewares/authorizeMiddleware';

const router = Router();

router.post("/signin", authenticateHandler)

router.get("/validate", authorize(), validateUserHandler)

export default router;