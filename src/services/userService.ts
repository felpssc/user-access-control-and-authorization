import bcrypt from 'bcrypt';
import _ from 'lodash';

import { User, IUser } from '../models/User';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

interface IUpdateUser {
  name: string;
}

interface IGetUser {
  _id: string;
  name: string;
  email: string;
  type: 'subscriber' | 'editor' | 'admin';
  created_at: Date;
  updated_at: Date;
}

const listUsers = async ():Promise<IUser[]> => {
  const users = await User.find();

  return users;
};

const create = async ({ name, email, password }: ICreateUser):Promise<IGetUser> => {
  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
    type: 'subscriber',
  });

  await user.save();

  return _.omit(user.toObject(), ['password']);
};

const update = async ({ name }: IUpdateUser, id: string):Promise<IUser | null> => {
  const updatedUser = await User.findByIdAndUpdate(id, { name }, { new: true });

  return updatedUser;
};

const deleteUserById = async (id: string):Promise<void> => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error('User not found');
  }

  await User.deleteOne({ _id: id });
};

const changeUserType = async (id: string, type: 'subscriber' | 'editor' | 'admin'):Promise<IUser | null> => {
  const updatedUser = await User.findByIdAndUpdate(id, { type }, { new: true });

  return updatedUser;
};

export {
  listUsers,
  create,
  update,
  deleteUserById,
  changeUserType,
};
