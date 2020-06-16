import mongoose from 'mongoose';

const { Schema } = mongoose;

// USER SCHEMA
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date_created: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default userSchema;
