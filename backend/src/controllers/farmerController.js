import Product from '../models/Product.js';
import Order from '../models/Order.js';

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      farmer: req.user._id,
      location: req.user.location,
      organicCertified: req.user.organicCertified,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyProducts = async (req, res) => {
  try {
    const products = await Product.find({ farmer: req.user._id });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, farmer: req.user._id },
      req.body,
      { new: true }
    );
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ _id: req.params.id, farmer: req.user._id });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRevenue = async (req, res) => {
  try {
    const orders = await Order.find({ farmer: req.user._id });
    const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
    res.json({ totalRevenue, ordersCount: orders.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFarmerOrders = async (req, res) => {
  try {
    const orders = await Order.find({ farmer: req.user._id }).populate('buyer', 'name location');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
