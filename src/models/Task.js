import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {type: String, required: true},
    icon: {type: String, required: true},
    tasksFinished: {type: Number, required: false}, // modificado
    subTasks: [
      {
        type: mongoose.Schema.Types.ObjectId, ref: 'subTasks', required: false
      }
    ],
    }
);

const tasks = mongoose.model('tasks', TaskSchema);

export default tasks;

/*

export interface TaskProps  {
  
  title:         string,
  tasksQuantity: number, // isFinished = tasksQuantity == tasksFinished
  tasksFinished: number,
  icon:          string,
  id:            string,

  tasks?: SubtaskProps[]  
}



export interface SubtaskProps  {
  question?: string,
  answer?: string,
  description?: string,
  isCorrect?: boolean,
  image?: string,
  type?: 'select' | 'choise' | 'selectImage',
  options?: OptionProps[],
}
*/

/*


TaskProps

export interface SubtaskProps  {
  content?: string | string[],
  questions?: QuestionProps[],
}

QuestionProps antigo Subtask
*/