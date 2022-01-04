import bcrypt from 'bcrypt';
import { User } from '../models/User';

import { getUserToken } from '../helpers/getUserToken';

const signIn = async (email: string, password: string):Promise<string> => {
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new Error('Invalid credentials');
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new Error('Invalid credentials');
  }

  return getUserToken(user);
};

export { signIn };
