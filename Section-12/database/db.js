const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongoose");
    console.log("DB Connected Successfully");
  } catch (error) {
    console.error(`DB connection Failed: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectToDB;
