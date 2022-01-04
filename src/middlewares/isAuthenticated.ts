import { Request, Response, NextFunction } from 'express';

const shouldBeAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    next();
  } else {
    const error = new Error('Not authenticated');
    res.status(401);
    next(error);
  }
};

export { shouldBeAuthenticated };
