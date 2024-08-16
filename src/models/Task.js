import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {type: String, required: true},
    icon: {type: String, required: true},
    tasksFinished: {type: Number, required: false},
    subTasks: [
      {
        type: mongoose.Schema.Types.ObjectId, ref: 'subTasks', required: false
      }
    ],
    }
);

const tasks = mongoose.model('tasks', TaskSchema);

export default tasks;