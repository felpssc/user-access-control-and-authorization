import mongoose from 'mongoose';

interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  type: 'subscriber' | 'editor' | 'admin';
  created_at: Date;
  updated_at: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
  type: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model<IUser>('User', UserSchema);

export { User, IUser };
