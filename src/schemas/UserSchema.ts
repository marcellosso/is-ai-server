export enum USER_ROLE_ENUM {
  USER = 'user',
  ADMIN = 'admin'
}

export type UserSchema = {
  username: string;

  email: string;

  password: string;

  role: USER_ROLE_ENUM;
}
