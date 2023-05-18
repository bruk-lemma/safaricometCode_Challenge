const mongoose = require("mongoose");

// Define the employee schema
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

// Create the employee model
module.exports = mongoose.model("Employee", employeeSchema);
