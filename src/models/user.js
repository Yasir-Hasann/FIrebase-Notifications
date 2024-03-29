const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    fcm: [String]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('user', UserSchema);