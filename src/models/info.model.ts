import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { ImageType } from "../schemas/InfoSchema";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  }
})
class Info {
  @prop({ required: true, unique: true })
  imageName: string;

  @prop()
  description: string;

  @prop()
  source_uri: string;

  @prop({ required: true, enum: ImageType })
  type: ImageType;
}

export default getModelForClass(Info);