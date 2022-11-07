import { ALLOWED_ORIGINS, NODE_ENV } from "./config"

// TODO Remove any?
export const corsAllOptions = {
  origin: (origin: any, callback: any) => {
    if (ALLOWED_ORIGINS.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
}
