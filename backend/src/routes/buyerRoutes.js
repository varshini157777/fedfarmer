import express from 'express';
import {
  listProducts,
  filterProducts,
  createOrder,
  createReview,
  getBuyerOrders,
} from '../controllers/buyerController.js';
import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/products', listProducts);
router.post('/products/filter', filterProducts);

router.use(protect, authorizeRoles('buyer'));

router.post('/orders', createOrder);
router.get('/orders', getBuyerOrders);
router.post('/reviews', createReview);

export default router;
