export enum IMAGE_TYPE_ENUM {
  AI = 'ai',
  HUMAN = 'human'
}

export type InfoSchema = {
  type: IMAGE_TYPE_ENUM;

  image_uri: string;
}

export type PreviousAnswersSchema = {
  levelId: string;
  answer: IMAGE_TYPE_ENUM;
}