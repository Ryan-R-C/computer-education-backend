import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    id: {type: String},
    question: {type: String, required: true},
    answer: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    type: {type: String, required: true},
    options: [{type: mongoose.Schema.Types.ObjectId, ref: 'options', required: true}],
  }
);

const Question = mongoose.model('questions', QuestionSchema);

export default Question;