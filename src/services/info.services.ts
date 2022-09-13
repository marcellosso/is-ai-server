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
};

export const getLevels = async () => {
  try {
    const levels = await Info.find();
    return levels;
  } catch (err) {
    throw(err);
  }
};

export const updateLevel = async (id: string, level: Partial<InfoSchema>) => {
  try {
    const updatedLevel = await Info.findByIdAndUpdate(id, level, {
      returnOriginal: false
    });
    return updatedLevel;
  } catch (err) {
    throw(err);
  }
}

export const deleteLevel = async (id: string) => {
  try {
    return await Info.findByIdAndDelete(id);
  } catch (err) {
    throw(err);
  }
}