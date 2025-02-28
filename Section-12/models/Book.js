const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true, // Added this line
        required: [true, "Title is required"],
        trim: true,
        maxLength: [100, "Title can not be more than 100 characters"]
    },
    author: {
        type: String,
        required: [true, "Author name is required"],
        trim: true,
    },
    year: {
        type: Number,
        required: [true, "Published Year is required"],
        min: [1000, "Year can not be less than 1000"],
        max: [new Date().getFullYear(), "Year can not be in future"] // Corrected this line
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Book", bookSchema);
