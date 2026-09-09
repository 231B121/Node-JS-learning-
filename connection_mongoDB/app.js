const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydb");
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

main();