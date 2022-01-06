import { Router } from 'express';
import { create } from '../controllers/postController';

import { shouldBeAuthenticated } from '../middlewares/isAuthenticated';
import { shouldBeEditor } from '../middlewares/isEditor';

const router = Router();

router.post('/', shouldBeAuthenticated, shouldBeEditor, create);

export { router as postRouter };
