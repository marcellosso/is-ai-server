import { config } from 'dotenv';

config();

export const SERVER_PORT = process.env.SERVER_PORT as string;
export const MONGODB_URI = process.env.MONGODB_URI as string;
export const ALLOWED_ALL_ORIGINS = process.env.ALLOWED_ALL_ORIGINS?.split(",") || [""];
export const ALLOWED_ADMIN_ORIGINS = process.env.ALLOWED_ADMIN_ORIGINS?.split(",") || [""];
export const NODE_ENV = process.env.NODE_ENV as string
