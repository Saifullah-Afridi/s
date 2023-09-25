const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maximumPeople: {
    type: Number,
    required: true,
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
  },
  description: {
    type: String,
    required: true,
  },
  rooNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
});

//Export the model
module.exports = mongoose.model("Room", roomSchema);
