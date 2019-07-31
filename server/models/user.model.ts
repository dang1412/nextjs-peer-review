import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../../types/user.type';

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true, unique: true },
  isAdmin: { type: Boolean, required: false },
  role: { type: String, required: false },
  des: { type: String, required: false }
});

// TODO workaround mongoose defines model twice
const UserModel: mongoose.Model<Document & IUser> = mongoose.connection.models['User'] || mongoose.model<Document & IUser>('User', UserSchema);

// Export the model
export default UserModel;
