import { Router } from 'express';
import { doSignIn } from '../controllers/authController';

const router = Router();

router.post('/login', doSignIn);

export { router as authRouter };
