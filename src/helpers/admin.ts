import { ADMIN_EMAIL, ADMIN_PASSWORD } from '../config';
import User from '../models/user.model';
import { USER_ROLE_ENUM } from '../schemas/UserSchema';

export const createAdminUser = async () => {
  const adminFound = await User.findOne({ email: ADMIN_EMAIL });

  if (adminFound) return;

  const newAdmin = new User({
    username: "admin",
    email: ADMIN_EMAIL,
    role: USER_ROLE_ENUM.ADMIN
  });

  newAdmin.password = await newAdmin.encryptyPassword(ADMIN_PASSWORD);

  const admin = await newAdmin.save();

  console.log(`Admin created - Username: ${admin.username}, Email: ${admin.email}`);
}