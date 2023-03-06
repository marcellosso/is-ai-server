import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { IMAGE_TYPE_ENUM } from "../schemas/InfoSchema";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class Info {
  @prop()
  image_uri: string;

  @prop({ required: true, enum: IMAGE_TYPE_ENUM })
  type: IMAGE_TYPE_ENUM;

  @prop({ default: 0 })
  answered_ai: number;

  @prop({ default: 0 })
  answered_human: number;
}

export default getModelForClass(Info);
