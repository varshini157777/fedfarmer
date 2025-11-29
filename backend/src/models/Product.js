import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: String,
    category: {
      type: String,
      enum: ['pickles', 'jams', 'cold-pressed oils', 'spices', 'dehydrated foods', 'other'],
      required: true,
    },
    baseProduct: String,
    processingDetails: String,
    packagingDetails: String,
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    images: [String],
    location: String,
    organicCertified: { type: Boolean, default: false },
    isApproved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
