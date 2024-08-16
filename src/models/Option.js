import mongoose from "mongoose";

const OptionSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    isCorrect: {type: Boolean, required: true},
  }
);

const options = mongoose.model('options', OptionSchema);

export default options;