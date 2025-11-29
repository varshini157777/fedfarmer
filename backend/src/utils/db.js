import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/agrivaluehub';
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    if (error && error.stack) {
      console.error(error.stack);
    }
    throw error;
  }
};

export default connectDB;
