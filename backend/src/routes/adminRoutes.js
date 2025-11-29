import express from 'express';
import {
  getUsers,
  approveUser,
  deleteUser,
  getProducts,
  approveProduct,
  deleteProduct,
  createTrainingModule,
  listTrainingModules,
  getAnalytics,
} from '../controllers/adminController.js';
import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect, authorizeRoles('admin'));

router.get('/users', getUsers);
router.put('/users/:id/approve', approveUser);
router.delete('/users/:id', deleteUser);

router.get('/products', getProducts);
router.put('/products/:id/approve', approveProduct);
router.delete('/products/:id', deleteProduct);

router
  .route('/training-modules')
  .get(listTrainingModules)
  .post(createTrainingModule);

router.get('/analytics', getAnalytics);

export default router;
