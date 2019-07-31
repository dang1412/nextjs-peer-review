import mongoose, { Schema, Document } from 'mongoose';
import { IReview } from '../../types/review.type';

const ReviewSchema = new Schema<IReview>({
  reviewee: { type: String, required: true },
  reviewer: { type: String, required: true },
  point: { type: Number, required: false },
  comment: { type: String, required: false }
});

// TODO workaround mongoose defines model twice with HMR
const ReviewModel: mongoose.Model<Document & IReview> = mongoose.connection.models['Review'] || mongoose.model<Document & IReview>('Review', ReviewSchema);

// Export the model
export default ReviewModel;
