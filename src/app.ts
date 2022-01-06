import express from 'express';
import { userRouter } from './routes/userRoutes';
import { authRouter } from './routes/authRoutes';

import { setReqUser } from './middlewares/setRequestUser';
import { postRouter } from './routes/postRoutes';

const app = express();

app.use(express.json());

// middlewares
app.use(setReqUser);

// routes
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);

export { app };
