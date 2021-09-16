const { Schema, model } = require("mongoose");

const taskModel = new Schema({
  status: { type: Number, default: 0 },
  start: { type: Date, default: new Date() },
  end: { type: Date, default: null },
  duration: { type: Number },
  userId: { type: String, ref: "Users" },
  machineId: { type: String, ref: "Machines" },
  material: { type: String },
  thickness: { type: Number },
  programNumber: { type: String },
  priority: { type: Number },
});

module.exports = model("Tasks", taskModel);
