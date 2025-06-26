const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  description: { type: String, required: true },
  dueDate: { type: Date }, // Fecha objetivo
  completed: { type: Boolean, default: false },
  completedAt: { type: Date }, // Fecha en que fue completada
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', TaskSchema); 