import mongoose from "mongoose";

// Creating mongoose method to pass in my objects & create schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: [true, "The username has to be unique"],
  },

  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "The email has to be unique"],
  },

  password: {
    type: String,
    required: [true, "Please provide an email"],
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

// it checks if users model exist otherwise it creates new
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
