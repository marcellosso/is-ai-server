import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { IMAGE_TYPE_ENUM } from "../schemas/InfoSchema";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class Info {
  @prop({ required: true, unique: true })
  imageName: string;

  @prop()
  description: string;

  @prop()
  source_uri: string;

  @prop({ required: true, enum: IMAGE_TYPE_ENUM })
  type: IMAGE_TYPE_ENUM;

  @prop()
  answered_ai: number;

  @prop()
  answered_human: number;
}

export default getModelForClass(Info);
