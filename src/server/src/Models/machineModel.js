const { Schema, model } = require('mongoose');

const machineModel = new Schema({
  name: { type: String },
  status: { type: Number },

});

module.exports = model('Machines', machineModel);
