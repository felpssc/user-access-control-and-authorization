import { Request, Response } from 'express';
import { IPost } from '../models/Post';

import {
  listPosts, createPost, updatePost, deletePost,
} from '../services/postService';

const list = async (req: Request, res: Response) => {
  try {
    const posts = await listPosts();

    return res.json(posts);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

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

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body, status, title } = req.body;

  try {
    const post: IPost | null = await updatePost({ body, status, title }, id);

    return res.json(post);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

const deletePostById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await deletePost(id);

    return res.status(204).send();
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export {
  list,
  create,
  update,
  deletePostById,
};
