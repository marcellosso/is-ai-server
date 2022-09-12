export enum ImageType {
  AI = 'ai',
  HUMAN = 'human'
}

export type InfoSchema = {
  imageName: string;

  description: string;

  source_uri: string;

  type: ImageType;
}
