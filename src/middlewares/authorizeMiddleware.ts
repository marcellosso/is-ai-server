import { JWT_SECRET_KEY } from '../config';
import { USER_ROLE_ENUM } from '../schemas/UserSchema';

var { expressjwt: jwt } = require("express-jwt");

export const authorize = () => {
  return [
    jwt({ secret: JWT_SECRET_KEY, algorithms: ['HS256'] }),
    
    (req: any, res: any, next: any) => {
      if (req.auth.role != USER_ROLE_ENUM.ADMIN) {
        return next('Unauthorized')
      }
  
      next();
    }
  ]
}