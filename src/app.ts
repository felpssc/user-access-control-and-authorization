import express from 'express';
import { userRouter } from './routes/userRoutes';
import { authRouter } from './routes/authRoutes';

import { setReqUser } from './middlewares/setRequestUser';

const app = express();

app.use(express.json());

// middlewares
app.use(setReqUser);

// routes
app.use('/users', userRouter);
app.use('/auth', authRouter);

export { app };
