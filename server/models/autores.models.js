const mongoose = require("mongoose");
const AutoresSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Author is required"],
      minlength: [3, "Author must be at least 3 characters longer"],
    }
  },
  { timestamps: true }
);
module.exports.Autores = mongoose.model("Autores", AutoresSchema);