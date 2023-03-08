import Info from "../models/info.model";
import { IMAGE_TYPE_ENUM, InfoSchema, PreviousAnswersSchema } from "../schemas/InfoSchema";

export const createLevel = async (levelInfo: InfoSchema) => {
  try {
    const createdLevel = new Info(levelInfo);
    const savedLevel = await createdLevel.save();
    
    return savedLevel;
  } catch (err) {
    throw(err);
  }
};

export const createLevelBulk = async (levelsInfo: InfoSchema[]) => {
  try {
    const levels = levelsInfo.map((level) => new Info(level));
    const savedLevels = await Info.bulkSave(levels);
    
    return savedLevels;
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

export const updateLevelsAnswers = async (answers: PreviousAnswersSchema[]) => {
  try {
    answers.forEach(async (answer) => {
      const foundLevel = await Info.findById(answer.levelId);

      let answeredAICount = foundLevel?.answered_ai as number;
      let answeredHumanCount = foundLevel?.answered_human as number;

      if (answer.answer == IMAGE_TYPE_ENUM.AI) answeredAICount += 1;
      else if (answer.answer == IMAGE_TYPE_ENUM.HUMAN) answeredHumanCount += 1;

      await foundLevel?.updateOne({
        answered_ai: answeredAICount,
        answered_human: answeredHumanCount
      })
    })
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