import Product from '../models/Product.js';
import Order from '../models/Order.js';
import Review from '../models/Review.js';

export const listProducts = async (req, res) => {
  try {
    const products = await Product.find({ isApproved: true }).populate('farmer', 'name location');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const filterProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, location, organicCertified } = req.body;
    const query = { isApproved: true };
    if (category) query.category = category;
    if (location) query.location = location;
    if (organicCertified !== undefined) query.organicCertified = organicCertified;
    if (minPrice || maxPrice) query.price = {};
    if (minPrice) query.price.$gte = minPrice;
    if (maxPrice) query.price.$lte = maxPrice;

    const products = await Product.find(query).populate('farmer', 'name location');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const farmerId = items[0]?.farmer || null;

    const order = await Order.create({
      buyer: req.user._id,
      farmer: farmerId,
      items,
      totalAmount,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    const review = await Review.create({
      product: productId,
      buyer: req.user._id,
      rating,
      comment,
    });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBuyerOrders = async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user._id }).populate('farmer', 'name');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
