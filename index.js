const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const fileRoutes = require('./Routes/fileRoutes');

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// Connect to MongoDB
mongoose.connect("mongodb+srv://harsh31:harsh31@cluster0.n8r2qgg.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

// Serve the uploaded PDF files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use the file routes
app.use("/", fileRoutes);

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
