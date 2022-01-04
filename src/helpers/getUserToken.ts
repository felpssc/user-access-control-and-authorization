import 'dotenv/config';
import jwt from 'jsonwebtoken';

import { IUser } from '../models/User';

interface JwtPayload {
  id: string;
  email: string;
  type: 'subscriber' | 'editor' | 'admin';
}

const getUserToken = (user: IUser):string => {
  const userPayload: JwtPayload = {
    id: user._id,
    email: user.email,
    type: user.type,
  };

  const token = jwt.sign(userPayload, process.env.JWT_SECRET!);

  return token;
};

export { getUserToken };
