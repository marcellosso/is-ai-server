import mongoose from 'mongoose';
import { MONGODB_URI } from './config';

export const connectDatabase = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log('Connected to: ', db.connection.name);
  } catch (err) {
    console.error(err);
  }
}