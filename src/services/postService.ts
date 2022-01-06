import { Post, IPost } from '../models/Post';

import { slugify } from '../helpers/getPostSlug';

interface ICreatePost {
  title: string;
  slug?: string;
  body: string;
  status: 'draft' | 'published';
  created_by: string;
}

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

export { createPost };
