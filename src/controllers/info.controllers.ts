import { Request, Response } from 'express'
import { createLevel, deleteLevel, getLevels, updateLevel } from '../services/info.services';

export const createLevelHandler = async (req: Request, res: Response) => {
  try {
    const { description, source_uri, type } = req.body;
    const imageName = req.file?.filename as string;
   
    const createdLevel = await createLevel({ imageName, description, source_uri, type });
    res.json(createdLevel);
  } catch (err) {
    res.json(err);
  }
}

export const getLevelsHandler = async (req: Request, res: Response) => {
  try {
    const levels = await getLevels();
    res.json(levels);
  } catch (err) {
    res.json(err);
  }
}

export const updateLevelHandler = async (req: Request, res: Response) => {
  try {
    const updatedLevel = await updateLevel(req.params.id, req.body);
    res.json(updatedLevel);
  } catch (err) {
    res.json(err);
  }
}

export const deleteLevelHandler = async (req: Request, res: Response) => {
  try {
    const deletedLevel = await deleteLevel(req.params.id);
    res.json(deletedLevel);
  } catch (err) {
    res.json(err);
  }
}