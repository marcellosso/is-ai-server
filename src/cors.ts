import { ALLOWED_ORIGINS, NODE_ENV } from "./config"

// TODO Remove any?
export const corsAllOptions = {
  origin: (origin: any, callback: any) => {
    console.log('\n')
    console.log('ALLOWED ORIGINS: ', ALLOWED_ORIGINS)
    console.log('CURRENT ORIGIN: ', origin)
    if (ALLOWED_ORIGINS.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
      console.log('\n')
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
}
