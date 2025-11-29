import mongoose from 'mongoose';

const trainingModuleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, enum: ['video', 'pdf', 'article'], required: true },
    description: String,
    url: String,
    category: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const TrainingModule = mongoose.model('TrainingModule', trainingModuleSchema);

export default TrainingModule;
