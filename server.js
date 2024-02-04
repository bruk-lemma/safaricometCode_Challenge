const express = require("express");
const mongoose = require("mongoose");
const SongRouter = require("./routes/songRoutes");
const SongController = require("./controllers/songcontroller");
const SOng = require("./models/songModel");

// Create Express.js application
const app = express();

// Use JSON body parser
app.use(express.json());

//allow cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// MongoDB connection URI
//const uri = "mongodb://localhost:27017/song ";

const uri =
  "mongodb+srv://bruk:bruk@cluster0.dgmqahh.mongodb.net/song?retryWrites=true&w=majority";

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
  console.log("MongoDB connected to " + uri);
});

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.use("/song", SongRouter);

//handle for non-existing routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
