import mongoose from 'mongoose';

interface IPost {
  _id: string;
  title: string;
  slug: string;
  body: string;
  status: 'draft' | 'published';
  created_by: string;
  created_at: Date;
  updated_at: Date;
}

const PostSchema = new mongoose.Schema<IPost>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  body: { type: String, required: true },
  status: { type: String, required: true },
  created_by: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Post = mongoose.model<IPost>('Post', PostSchema);

export { Post, IPost };
