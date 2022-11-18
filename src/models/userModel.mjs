import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model('Users', UserSchema);
export default UserModel;
