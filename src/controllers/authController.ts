import { Request, Response } from 'express';
import { signIn } from '../services/authService';

const doSignIn = async (req: Request, res: Response) => {
  try {
    const token = await signIn(req.body.email, req.body.password);
    return res.status(200).json({ token });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export { doSignIn };
