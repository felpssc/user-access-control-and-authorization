import { Post, IPost } from '../models/Post';

import { slugify } from '../helpers/getPostSlug';

interface ICreatePost {
  title: string;
  slug?: string;
  body: string;
  status: 'draft' | 'published';
  created_by: string;
}

interface IUpdatePost {
  title?: string;
  body?: string;
  status?: 'draft' | 'published';
  slug?: string;
}

const listPosts = async (): Promise<IPost[]> => {
  const posts = await Post.find({});

  return posts;
};

const createPost = async ({
  title, body, status, created_by,
}: ICreatePost): Promise<IPost> => {
  const post = await Post.create({
    title,
    slug: slugify(title),
    body,
    status,
    created_by,
  });

  await post.save();

  return post;
};

const updatePost = async ({
  body,
  status,
  title,
}: IUpdatePost, id: string): Promise<IPost | null> => {
  const updatedDocument: IUpdatePost = {};

  const post = await Post.findById(id);

  if (!post) {
    throw new Error('Post not found');
  }

  if (body) {
    updatedDocument.body = body;
  }

  if (status) {
    updatedDocument.status = status;
  }

  if (title) {
    updatedDocument.title = title;
    updatedDocument.slug = slugify(title);
  }

  const UpdatedPost = await Post.findByIdAndUpdate(id, updatedDocument, { new: true });

  return UpdatedPost;
};

const deletePost = async (id: string): Promise<void> => {
  const post = await Post.findById(id);

  if (!post) {
    throw new Error('Post not found');
  }

  await Post.findByIdAndDelete(id);
};

export {
  listPosts,
  createPost,
  updatePost,
  deletePost,
};
