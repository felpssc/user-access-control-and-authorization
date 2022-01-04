import { Router } from 'express';
import {
  createUser,
  updateUser,
  deleteUser,
  list,
} from '../controllers/userController';

import { shouldBeAuthenticated } from '../middlewares/isAuthenticated';
import { shouldBeAdmin } from '../middlewares/isAdmin';

const router = Router();

router.get('/', shouldBeAuthenticated, shouldBeAdmin, list);
router.post('/', createUser);
router.put('/', shouldBeAuthenticated, updateUser);
router.delete('/:id', shouldBeAuthenticated, shouldBeAdmin, deleteUser);

export { router as userRouter };
