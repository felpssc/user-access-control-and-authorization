import { Request, Response, NextFunction } from 'express';

const shouldBeAdmin = async (req: Request, res: Response, next: NextFunction) => {
  if (req.user.type === 'admin') {
    next();
  } else {
    const error = new Error('You do not have permission to perform this action');
    res.status(401);
    next(error);
  }
};

export { shouldBeAdmin };
