const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: [true, "Email should be unique."],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
