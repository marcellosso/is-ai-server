import bcrypt from 'bcrypt';
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { USER_ROLE_ENUM } from "../schemas/UserSchema";

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
class User {
  @prop({ required: true, trim: true  })
  username: string;

  @prop({ required: true, unique: true })
  email: string;

  @prop({ required: true })
  password: string;

  @prop({ required: true, enum: USER_ROLE_ENUM, immutable: true })
  role: USER_ROLE_ENUM;

  async encryptyPassword (password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async matchPassword (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
  
}

export default getModelForClass(User);