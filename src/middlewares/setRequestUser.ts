import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
  email: string;
  type: 'subscriber' | 'editor' | 'admin';
}

const setReqUser = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.token as string;

  if (token) {
    try {
      const user = jwt.decode(token) as JwtPayload;

      if (user) {
        req.user = user;
      }

      next();
    } catch (err) {
      console.log(err);
      next();
    }
  } else {
    next();
  }
};

export { setReqUser };
