import { Request, Response } from 'express'
import { createLevel } from '../services/info.services';

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