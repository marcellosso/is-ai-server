import { config } from 'dotenv';

config();

export const SERVER_PORT = process.env.PORT as string;
export const MONGODB_URI = process.env.MONGODB_URI as string;
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS?.split(",") || [""];
export const NODE_ENV = process.env.NODE_ENV as string;
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL as string;
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD as string;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN as string;
export const AWS_REGION = process.env.AWS_REGION as string;
export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY as string;
export const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY as string;
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME as string;