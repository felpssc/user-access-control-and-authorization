import { Request, Response } from 'express';
import { IPost } from '../models/Post';

import { createPost } from '../services/postService';

const create = async (req: Request, res: Response) => {
  const { title, body, status } = req.body;

  const created_by = req.user.id;

  try {
    const post: IPost = await createPost({
      title, body, status, created_by,
    });

    return res.status(201).json(post);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export { create };
