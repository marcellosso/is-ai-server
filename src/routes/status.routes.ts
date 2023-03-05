import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.status(200).json({ status: 'ONLINE', host: req.hostname || 'none' }));

export default router;