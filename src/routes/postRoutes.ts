import { Router } from 'express';
import {
  list,
  create,
  update,
  deletePostById,
} from '../controllers/postController';

import { shouldBeAuthenticated } from '../middlewares/isAuthenticated';
import { shouldBeEditor } from '../middlewares/isEditor';

const router = Router();

router.get('/', shouldBeAuthenticated, list);
router.post('/', shouldBeAuthenticated, shouldBeEditor, create);
router.put('/:id', shouldBeAuthenticated, shouldBeEditor, update);
router.delete('/:id', shouldBeAuthenticated, shouldBeEditor, deletePostById);

export { router as postRouter };
