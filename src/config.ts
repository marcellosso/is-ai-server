import { config } from 'dotenv';

config();

export const SERVER_PORT = process.env.SERVER_PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/is-ai";