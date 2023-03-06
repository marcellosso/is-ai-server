import { NextFunction, Request, Response } from 'express'
import { createLevel, deleteLevel, getLevels, updateLevel, updateLevelsAnswers } from '../services/info.services';

export const createLevelHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { type } = req.body;
    
    const createdLevel = await createLevel({ type, image_uri: (req.file as any).location });
    res.json(createdLevel);
  } catch (err) {
    next(err);
  }
}

export const getLevelsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const levels = await getLevels();
    res.json(levels);
  } catch (err) {
    next(err);
  }
}

export const updateLevelHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedLevel = await updateLevel(req.params.id, req.body);
    res.json(updatedLevel);
  } catch (err) {
    next(err);
  }
}

export const updateLevelsAnswersHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await updateLevelsAnswers(req.body);
    res.status(200).send()
  } catch (err) {
    next(err);
  }
}

export const deleteLevelHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedLevel = await deleteLevel(req.params.id);
    res.json(deletedLevel);
  } catch (err) {
    next(err);
  }
}