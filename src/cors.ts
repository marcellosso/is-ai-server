import { ALLOWED_ADMIN_ORIGINS, ALLOWED_ALL_ORIGINS, NODE_ENV } from "./config"

// TODO Remove any?
export const corsAllOptions = {
  origin: (origin: any, callback: any) => {
    if (ALLOWED_ALL_ORIGINS.indexOf(origin) !== -1 || (!origin && NODE_ENV === 'local')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
}

export const corsAdminOptions = {
  origin: (origin: any, callback: any) => {
    if (ALLOWED_ADMIN_ORIGINS.indexOf(origin) !== -1 || (!origin && NODE_ENV === 'local')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
}