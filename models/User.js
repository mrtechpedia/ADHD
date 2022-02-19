const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  category: String,
  age: Number,
  gender: String,
  score: [
    {
      date: Date,
      result: Number,
    },
  ],
});

mongoose.model("users", userSchema);
