const mongoose = require("mongoose"); // Erase if already required
const validator = require("validator");
const bcrypt = require("bcrypt");

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please Provide user name"],
      unique: [true, "User with the same already exist"],
    },
    email: {
      type: String,
      required: [true, "Please provide user email"],
      unique: [true, "Email already exist"],
      validate: [validator.isEmail, "Please Provide correct email"],
    },
    password: {
      type: String,
      required: [true, "please provide password"],
    },
    passwordConfirm: {
      type: String,
      required: [true, "please confirm your password"],
      validate: {
        validator: function (el) {
          return this.password === el;
        },
        message: "The passwords does not match",
      },
    },
    isAdmin: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.comparePasssword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
