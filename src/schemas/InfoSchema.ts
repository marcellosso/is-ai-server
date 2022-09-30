export enum IMAGE_TYPE_ENUM {
  AI = 'ai',
  HUMAN = 'human'
}

export type InfoSchema = {
  imageName: string;

  description: string;

  source_uri: string;

  type: IMAGE_TYPE_ENUM;
}

export type PreviousAnswersSchema = {
  levelId: string;
  answer: IMAGE_TYPE_ENUM;
}