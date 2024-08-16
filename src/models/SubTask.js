import mongoose from "mongoose";

const subTaskSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {type: String, required: true},
    content: [{type: String, required: true}],
    image: {type: String},
    questions: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'questions', required: true
    }],
  }
);

const subTask = mongoose.model('subTasks', subTaskSchema);

export default subTask;