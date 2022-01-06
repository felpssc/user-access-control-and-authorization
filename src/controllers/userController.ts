import { Request, Response } from 'express';
import {
  listUsers,
  create,
  update,
  deleteUserById,
  changeUserType,
} from '../services/userService';

const list = async (req: Request, res: Response) => {
  try {
    const users = await listUsers();
    return res.status(200).json(users);
  } catch (error: any) {
    return res.json({ error: error.message });
  }
};

const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await create({ name, email, password });
    res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { id } = req.user;

  try {
    const user = await update({ name }, id);
    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await deleteUserById(id);
    return res.status(204).end();
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

const changeType = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { type } = req.body;

  try {
    const user = await changeUserType(id, type);
    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export {
  list, createUser, updateUser, deleteUser, changeType,
};
