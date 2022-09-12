import Info from "../models/info.model";
import { InfoSchema } from "../schemas/InfoSchema";

export const createLevel = async (levelInfo: InfoSchema) => {
  try {
    const createdLevel = new Info(levelInfo);
    const savedLevel = await createdLevel.save();
    
    return savedLevel;
  } catch (err) {
    throw(err);
  }
}