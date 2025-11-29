import express from 'express';
import {
  createProduct,
  getMyProducts,
  updateProduct,
  deleteProduct,
  getRevenue,
  getFarmerOrders,
} from '../controllers/farmerController.js';
import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect, authorizeRoles('farmer'));

router.route('/products').get(getMyProducts).post(createProduct);
router.route('/products/:id').put(updateProduct).delete(deleteProduct);
router.get('/revenue', getRevenue);
router.get('/orders', getFarmerOrders);

export default router;
