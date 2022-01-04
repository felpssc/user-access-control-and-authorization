import 'dotenv/config';
import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

const db = async () => {
  await mongoose.connect(MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('🔌 MongoDB connected'))
    .catch((error) => console.error(error));
};

export { db, mongoose };
