import { Request, Response, NextFunction } from 'express';
import { authenticate } from '../services/auth.service';

export const authenticateHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await authenticate(req.body);

    if (!user) res.status(400).json({ message: 'Invalid email' });

    res.json(user);
  } catch (err) {
    next(err);
  }
}

export const validateUserHandler = async (req: any, res: Response) => {
  res.send({
    user: req?.auth?.email
  })
}