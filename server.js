const express = require("express");
const mongoose = require("mongoose");
const EmployeeRouter = require("./routes/employeeRoutes");
const employeeController = require("./controllers/employeecontroller");
const Employee = require("./models/employeeModel");

// Create Express.js application
const app = express();

// Use JSON body parser
app.use(express.json());

// MongoDB connection URI
const uri = "mongodb://localhost:27017";

// Establish MongoDB connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Handle connection events
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.use("/employees", EmployeeRouter);

const port = 6000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
