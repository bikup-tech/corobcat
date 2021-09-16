const { Schema, model } = require("mongoose");

const userModel = new Schema({
  role: { type: Number, default: 1 },
  name: { type: String },
  userCode: { type: String },
});

module.exports = model("Users", userModel);
