import { generateAccessToken } from '../helpers/jwt';
import User from '../models/user.model';

type AuthenticateProps = {
  email: string,
  password: string
}

export const authenticate = async ({ email, password } : AuthenticateProps) => {
  try {
    const user = await User.findOne({ email });
    
    if (user) {
      const validPassword = await user?.matchPassword(password);

      if (!validPassword) throw('Invalid password');

      const token = generateAccessToken({ id: user.id, role: user.role, email: user.email });
      return {
        username: user.username,
        email: user.email,
        role: user.role,
        token
      }
    }
  } catch(err) {
    throw(err);
  }
}
